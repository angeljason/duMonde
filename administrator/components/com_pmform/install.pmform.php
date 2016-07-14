<?php
/**
 * @version        4.2
 * @package        Joomla
 * @subpackage     Payment Form
 * @author         Tuan Pham Ngoc
 * @copyright      Copyright (C) 2010 Ossolution Team
 * @license        GNU/GPL, see LICENSE.php
 */
/** ensure this file is being included by a parent file */
defined('_JEXEC') or die;

jimport('joomla.filesystem.folder');
jimport('joomla.filesystem.file');
/**
 * Change the db structure of the previous version
 *
 */
class com_pmformInstallerScript
{
	public static $languageFiles = array('en-GB.com_pmform.ini');

	/**
	 * Method to run before installing the component
	 */
	function preflight($type, $parent)
	{

		//Backup the old language files
		foreach (self::$languageFiles as $languageFile)
		{
			if (JFile::exists(JPATH_ROOT . '/language/en-GB/' . $languageFile))
			{
				JFile::copy(JPATH_ROOT . '/language/en-GB/' . $languageFile, JPATH_ROOT . '/language/en-GB/bak.' . $languageFile);
			}
		}
		//Deleting files/folders which are not using in latest version
		if (JFolder::exists(JPATH_ADMINISTRATOR . '/components/com_pmform/models'))
		{
			JFolder::delete(JPATH_ADMINISTRATOR . '/components/com_pmform/models');
		}
		if (JFolder::exists(JPATH_ADMINISTRATOR . '/components/com_pmform/views'))
		{
			JFolder::delete(JPATH_ADMINISTRATOR . '/components/com_pmform/views');
		}
		if (JFolder::exists(JPATH_ADMINISTRATOR . '/components/com_pmform/tables'))
		{
			JFolder::delete(JPATH_ADMINISTRATOR . '/components/com_pmform/tables');
		}

		if (JFile::exists(JPATH_ADMINISTRATOR . '/components/com_pmform/controller.php'))
		{
			JFile::delete(JPATH_ADMINISTRATOR . '/components/com_pmform/controller.php');
		}

		if (JFolder::exists(JPATH_ROOT . '/components/com_pmform/models'))
		{
			JFolder::delete(JPATH_ROOT . '/components/com_pmform/models');
		}
		if (JFolder::exists(JPATH_ROOT . '/components/com_pmform/views'))
		{
			JFolder::delete(JPATH_ROOT . '/components/com_pmform/views');
		}
		if (JFile::exists(JPATH_ROOT . '/components/com_pmform/controller.php'))
		{
			JFile::delete(JPATH_ROOT . '/components/com_pmform/controller.php');
		}
		if (JFile::exists(JPATH_ROOT . '/components/com_pmform/helper/fields.php'))
		{
			JFile::delete(JPATH_ROOT . '/components/com_pmform/helper/fields.php');
		}
		if (JFile::exists(JPATH_ROOT . '/components/com_pmform/helper/captcha.php'))
		{
			JFile::delete(JPATH_ROOT . '/components/com_pmform/helper/captcha.php');
		}
		
		if (JFile::exists(JPATH_ROOT . '/components/com_pmform/ipn_logs.txt'))
		{
			JFile::delete(JPATH_ROOT . '/components/com_pmform/ipn_logs.txt');
		}
	}
	/**
	 * method to install the component
	 *
	 * @return void
	 */
	function install($parent)
	{
		$this->updateDatabaseSchema();
	}

	function update($parent)
	{
		$this->updateDatabaseSchema();
	}

	function updateDatabaseSchema()
	{
		require_once JPATH_ROOT . '/components/com_pmform/helper/helper.php';
		$db = JFactory::getDbo();
		// Load states database
		$sqlFile = JPATH_ADMINISTRATOR . '/components/com_pmform/sql/states.pmform.sql';
		$sql       = file_get_contents($sqlFile);
		$queries   = $db->splitSql($sql);
		if (count($queries))
		{
			foreach ($queries as $query)
			{
				if ($query != '' && $query{0} != '#')
				{
					$db->setQuery($query);
					$db->execute();
				}
			}
		}
		//Load config config data	
		$sql = 'SELECT COUNT(*) FROM #__pf_configs';
		$db->setQuery($sql);
		$total = $db->loadResult();
		if (!$total)
		{
			$configSql = JPATH_ADMINISTRATOR . '/components/com_pmform/sql/config.pmform.sql';
			$sql       = JFile::read($configSql);
			$queries   = $db->splitSql($sql);
			if (count($queries))
			{
				foreach ($queries as $query)
				{
					if ($query != '' && $query{0} != '#')
					{
						$db->setQuery($query);
						$db->execute();
					}
				}
			}
			//Update date_format config option
			$sql = 'UPDATE #__pf_configs SET config_value="m-d-Y" WHERE config_key="date_format"';
			$db->setQuery($sql);
			$db->execute();

		}
		//Version 1.1 : Add fields to form
		$fields = array_keys($db->getTableColumns('#__pf_forms'));
		if (!in_array('access', $fields))
		{
			$sql = "ALTER TABLE `#__pf_forms` ADD `access` TINYINT NOT NULL DEFAULT '0'";
			$db->setQuery($sql);
			$db->execute();
		}
		if (!in_array('enter_amount', $fields))
		{
			$sql = "ALTER TABLE `#__pf_forms` ADD `enter_amount` TINYINT NOT NULL DEFAULT '0'";
			$db->setQuery($sql);
			$db->execute();
		}
		if (!in_array('fee_calculation_script', $fields))
		{
			$sql = "ALTER TABLE `#__pf_forms` ADD `fee_calculation_script` TEXT NULL AFTER  `enter_amount`";
			$db->setQuery($sql);
			$db->execute();
		}
		//Version 1.2 : Add some extra veriables	
		if (!in_array('form_layout', $fields))
		{
			$sql = "ALTER TABLE `#__pf_forms` ADD `form_layout` VARCHAR( 50 ) NULL ;";
			$db->setQuery($sql);
			$db->execute();
		}
		//Added attachment support from version 1.7.0
		if (!in_array('attachment', $fields))
		{
			$sql = "ALTER TABLE  `#__pf_forms` ADD  `attachment` VARCHAR( 255 ) NULL;";
			$db->setQuery($sql);
			$db->execute();
			//Need to create com_eventbooking folder under media folder
			if (!JFolder::exists(JPATH_ROOT . '/media/com_pmform'))
			{
				JFolder::create(JPATH_ROOT . '/media/com_pmform');
			}
		}
		//Version 2.1, coupon code support
		if (!in_array('enable_coupon', $fields))
		{
			$sql = "ALTER TABLE `#__pf_forms` ADD `enable_coupon` TINYINT NOT NULL DEFAULT '0'";
			$db->setQuery($sql);
			$db->execute();
		}
		//Version 2.2, payment methods selection
		if (!in_array('payment_methods', $fields))
		{
			$sql = "ALTER TABLE `#__pf_forms` ADD `payment_methods` VARCHAR( 255 ) NULL;";
			$db->setQuery($sql);
			$db->execute();
		}
		$fields = array_keys($db->getTableColumns('#__pf_payments'));
		if (!in_array('discount_amount', $fields))
		{
			$sql = "ALTER TABLE  `#__pf_payments` ADD  `discount_amount` DECIMAL( 10, 2 ) NULL DEFAULT '0' ;";
			$db->setQuery($sql);
			$db->execute();
		}

		if (!in_array('payment_processing_fee', $fields))
		{
			$sql = "ALTER TABLE  `#__pf_payments` ADD  `payment_processing_fee` DECIMAL( 10, 2 ) NULL DEFAULT '0' ;";
			$db->setQuery($sql);
			$db->execute();
		}

		if (!in_array('coupon_id', $fields))
		{
			$sql = "ALTER TABLE  `#__pf_payments` ADD  `coupon_id` INT NOT NULL DEFAULT '0' ;";
			$db->setQuery($sql);
			$db->execute();
		}
		if (!in_array('total_amount', $fields))
		{
			$sql = "ALTER TABLE  `#__pf_payments` ADD  `total_amount` DECIMAL( 10, 2 ) NULL DEFAULT '0' ;";
			$db->setQuery($sql);
			$db->execute();

			$sql = "ALTER TABLE  `#__pf_payments` ADD  `gross_amount` DECIMAL( 10, 2 ) NULL DEFAULT '0' ;";
			$db->setQuery($sql);
			$db->execute();

			//Update the amount field
			$sql = 'UPDATE #__pf_payments SET `total_amount` = `amount`';
			$db->setQuery($sql);
			$db->execute();

			$sql = 'UPDATE #__pf_payments SET `gross_amount` = `total_amount` - `discount_amount`';
			$db->setQuery($sql);
			$db->execute();
		}

		if (!in_array('user_password', $fields))
		{
			$sql = "ALTER TABLE `#__pf_payments` ADD `user_password` VARCHAR( 225 ) NULL ;";
			$db->setQuery($sql);
			$db->execute();
		}

		if (!in_array('username', $fields))
		{
			$sql = "ALTER TABLE `#__pf_payments` ADD `username` VARCHAR( 225 ) NULL ;";
			$db->setQuery($sql);
			$db->execute();
		}


		// Invoice number
		if (!in_array('invoice_number', $fields))
		{
			$sql = "ALTER TABLE  `#__pf_payments` ADD  `invoice_number` INT NOT NULL DEFAULT  '0';";
			$db->setQuery($sql);
			$db->execute();

			//Update Invoice Number field for existing payment records
			$sql = 'SELECT id FROM #__pf_payments WHERE published=1 OR payment_method LIKE "%os_offline%" ORDER BY id';
			$db->setQuery($sql);
			$rows = $db->loadObjectList();
			if (count($rows))
			{
				$start = 1;
				foreach ($rows as $row)
				{
					$sql = 'UPDATE #__pf_payments SET invoice_number=' . $start . ' WHERE id=' . $row->id;
					$db->setQuery($sql);
					$db->execute();
					$start++;
				}
			}
			//Need to insert default data into the system
			$invoiceFormat = '<table border="0" width="100%" cellspacing="0" cellpadding="2">
			<tbody>
			<tr>
			<td align="left" width="100%">
			<table border="0" width="100%" cellspacing="0" cellpadding="2">
			<tbody>
			<tr>
			<td width="100%">
			<table style="width: 100%;" border="0" cellspacing="0" cellpadding="2">
			<tbody>
			<tr>
			<td align="left" valign="top" width="50%">
			<table style="width: 100%;" border="0" cellspacing="0" cellpadding="2">
			<tbody>
			<tr>
			<td align="left" width="50%">Company Name:</td>
			<td align="left">Ossolution Team</td>
			</tr>
			<tr>
			<td align="left" width="50%">URL:</td>
			<td align="left">http://www.joomdonation.com</td>
			</tr>
			<tr>
			<td align="left" width="50%">Phone:</td>
			<td align="left">84-972409994</td>
			</tr>
			<tr>
			<td align="left" width="50%">E-mail:</td>
			<td align="left">contact@joomdonation.com</td>
			</tr>
			<tr>
			<td align="left" width="50%">Address:</td>
			<td align="left">Lang Ha - Ba Dinh - Ha Noi</td>
			</tr>
			</tbody>
			</table>
			</td>
			<td align="right" valign="middle" width="50%"><img style="border: 0;" src="components/com_pmform/assets/icons/invoice_logo.png" alt="" /></td>
			</tr>
			<tr>
			<td colspan="2" align="left" width="100%">
			<table style="width: 100%;" border="0" cellspacing="0" cellpadding="2">
			<tbody>
			<tr>
			<td align="left" valign="top" width="50%">
			<table style="width: 100%;" border="0" cellspacing="0" cellpadding="2">
			<tbody>
			<tr>
			<td style="background-color: #d6d6d6;" colspan="2" align="left">
			<h4 style="margin: 0px;">Customer Information</h4>
			</td>
			</tr>
			<tr>
			<td align="left" width="50%">Name:</td>
			<td align="left">[NAME]</td>
			</tr>
			<tr>
			<td align="left" width="50%">Company:</td>
			<td align="left">[ORGANIZATION]</td>
			</tr>
			<tr>
			<td align="left" width="50%">Phone:</td>
			<td align="left">[PHONE]</td>
			</tr>
			<tr>
			<td align="left" width="50%">Email:</td>
			<td align="left">[EMAIL]</td>
			</tr>
			<tr>
			<td align="left" width="50%">Address:</td>
			<td align="left">[ADDRESS], [CITY], [STATE], [COUNTRY]</td>
			</tr>
			</tbody>
			</table>
			</td>
			<td align="left" valign="top" width="50%">
			<table style="width: 100%;" border="0" cellspacing="0" cellpadding="2">
			<tbody>
			<tr>
			<td style="background-color: #d6d6d6;" colspan="2" align="left">
			<h4 style="margin: 0px;">Invoice Information</h4>
			</td>
			</tr>
			<tr>
			<td align="left" width="50%">Invoice Number:</td>
			<td align="left">[INVOICE_NUMBER]</td>
			</tr>
			<tr>
			<td align="left" width="50%">Invoice Date:</td>
			<td align="left">[INVOICE_DATE]</td>
			</tr>
			<tr>
			<td align="left" width="50%">Invoice Status:</td>
			<td align="left">[INVOICE_STATUS]</td>
			</tr>
			</tbody>
			</table>
			</td>
			</tr>
			</tbody>
			</table>
			</td>
			</tr>
			<tr>
			<td style="background-color: #d6d6d6;" colspan="2" align="left">
			<h4 style="margin: 0px;">Order Items</h4>
			</td>
			</tr>
			<tr>
			<td colspan="2" align="left" width="100%">
			<table border="0" width="100%" cellspacing="0" cellpadding="2">
			<tbody>
			<tr>
			<td align="left" valign="top" width="10%">#</td>
			<td align="left" valign="top" width="60%">Name</td>
			<td align="right" valign="top" width="20%">Price</td>
			<td align="left" valign="top" width="10%">Sub Total</td>
			</tr>
			<tr>
			<td align="left" valign="top" width="10%">1</td>
			<td align="left" valign="top" width="60%">[ITEM_NAME]</td>
			<td align="right" valign="top" width="20%">[ITEM_AMOUNT]</td>
			<td align="left" valign="top" width="10%">[ITEM_SUB_TOTAL]</td>
			</tr>
			<tr>
			<td colspan="3" align="right" valign="top" width="90%">Discount :</td>
			<td align="left" valign="top" width="10%">[DISCOUNT_AMOUNT]</td>
			</tr>
			<tr>
			<td colspan="3" align="right" valign="top" width="90%">Subtotal :</td>
			<td align="left" valign="top" width="10%">[SUB_TOTAL]</td>
			</tr>
			<tr>
			<td colspan="3" align="right" valign="top" width="90%">Total :</td>
			<td align="left" valign="top" width="10%">[TOTAL_AMOUNT]</td>
			</tr>
			</tbody>
			</table>
			</td>
			</tr>
			</tbody>
			</table>
			</td>
			</tr>
			</tbody>
			</table>
			</td>
			</tr>
			</tbody>
			</table>';
			$sql = 'INSERT INTO #__pf_configs(config_key, config_value) VALUES ("invoice_format", ' . $db->quote($invoiceFormat) . ')';
			$db->setQuery($sql);
			$db->execute();

			$query = $db->getQuery(true);
			$query->insert('#__pf_configs')
				->columns('config_key, config_value')
				->values('"activate_invoice_feature", 0')
				->values('"send_invoice_to_customer", 0')
				->values('"invoice_start_number", 1')
				->values('"invoice_prefix", "IV"')
				->values('"invoice_number_length", 5');
			$db->setQuery($query);
			$db->execute();
		}

		//Change data type of description field to allows longer text

		$sql = 'ALTER TABLE `#__pf_fields` CHANGE  `description`  `description` TEXT NULL;';
		$db->setQuery($sql);
		$db->execute();

		$fields = array_keys($db->getTableColumns('#__pf_fields'));
		if (!in_array('datatype_validation', $fields))
		{
			$sql = "ALTER TABLE `#__pf_fields` ADD `datatype_validation` TINYINT NOT NULL DEFAULT '0' ";
			$db->setQuery($sql);
			$db->execute();
		}

		if (!in_array('fee_formula', $fields))
		{
			$sql = "ALTER TABLE `#__pf_fields` ADD `fee_formula` VARCHAR( 250 ) NULL ";
			$db->setQuery($sql);
			$db->execute();
		}

		if (!in_array('field_mapping', $fields))
		{
			$sql = "ALTER TABLE `#__pf_fields` ADD `field_mapping` VARCHAR( 50 ) NULL ";
			$db->setQuery($sql);
			$db->execute();
		}

		if (!in_array('is_core', $fields))
		{
			$sql = "ALTER TABLE `#__pf_fields` ADD `is_core` TINYINT NOT NULL DEFAULT '0' ";
			$db->setQuery($sql);
			$db->execute();
		}

		//We will need to insert core field
		$sql = 'SELECT COUNT(*) FROM #__pf_fields WHERE is_core = 1';
		$db->setQuery($sql);
		$total = $db->loadResult();
		if (!$total)
		{
			$sql = 'SELECT * FROM #__pf_fields ORDER BY id DESC ';
			$db->setQuery($sql);
			$rows = $db->loadObjectList();
			for ($i = 0, $n = count($rows); $i < $n; $i++)
			{
				$row = $rows[$i];
				$sql = 'UPDATE #__pf_fields SET id = id + 14 WHERE id=' . $row->id;
				$db->setQuery($sql);
				$db->execute();
			}
			//Update total custom field
			$sql = 'UPDATE #__pf_fields SET id = id + 14';
			$db->setQuery($sql);
			$db->execute();

			$sql = 'SELECT id FROM #__pf_forms';
			$db->setQuery($sql);
			$formIds = $db->loadColumn();
			$sql     = 'SELECT id FROM #__pf_fields WHERE form_id=0';
			$db->setQuery($sql);
			$fieldIds = $db->loadColumn();
			if (count($fieldIds))
			{
				foreach ($fieldIds as $fieldId)
				{
					for ($i = 0, $n = count($formIds); $i < $n; $i++)
					{
						$formId = $formIds[$i];
						$sql    = 'INSERT INTO #__pf_form_fields(form_id, field_id) VALUES(' . $formId . ',' . $fieldId . ')';
						$db->setQuery($sql);
						$db->execute();
					}
				}
			}
			$sql = 'SELECT id, form_id FROM #__pf_fields WHERE form_id > 0';
			$db->setQuery($sql);
			$fields = $db->loadObjectList();
			if (count($fields))
			{
				foreach ($fields as $field)
				{
					$fieldId = $field->id;
					$formId  = $field->form_id;
					$sql     = 'INSERT INTO #__pf_form_fields(form_id, field_id) VALUES(' . $formId . ',' . $fieldId . ')';
					$db->setQuery($sql);
					$db->execute();
				}
			}
			//Update the auto increament value
			$prefix = $db->getPrefix();
			$sql    = "SHOW TABLE STATUS LIKE  '#__pf_fields'";
			$sql    = str_replace('#__', $prefix, $sql);
			$db->setQuery($sql);
			$row            = $db->loadObject();
			$autoIncreament = (int) $row->Auto_increment;
			$autoIncreament += 14;
			$sql = 'ALTER TABLE #__pf_fields AUTO_INCREMENT = ' . $autoIncreament;
			$db->setQuery($sql);
			$db->execute();
			//Insert core fields into database
			$coreFieldsSql = JPATH_ADMINISTRATOR . '/components/com_pmform/sql/core_fields.pmform.sql';
			$sql           = JFile::read($coreFieldsSql);
			$queries       = $db->splitSql($sql);
			if (count($queries))
			{
				foreach ($queries as $query)
				{
					$query = trim($query);
					if ($query != '' && $query{0} != '#')
					{
						$db->setQuery($query);
						$db->execute();
					}
				}
			}
			//Path upload		
			$pathUpload = PMFormHelper::getConfigValue('path_upload');
			if (!$pathUpload)
			{
				$pathUpload = 'images/com_pmform';
				PMFormHelper::saveConfigValue('path_upload', $pathUpload);
			}
			if (!JFolder::exists(JPATH_ROOT . '/' . $pathUpload))
			{
				JFolder::create(JPATH_ROOT . '/' . $pathUpload);
			}
			if (!JFile::exists(JPATH_ROOT . '/' . $pathUpload . '/.htaccess'))
			{
				JFile::copy(JPATH_ROOT . '/administrator/components/com_pmform/htaccess.txt', JPATH_ROOT . '/' . $pathUpload . '/.htaccess');
			}
		}
		//Update show that all core fields are assigned to all forms by default
		$sql = 'UPDATE #__pf_fields SET form_id=-1 WHERE is_core=1';
		$db->setQuery($sql);
		$db->execute();

		//Need to check and generate data for plugins table
		$sql = 'SELECT COUNT(*) FROM #__pf_payment_plugins';
		$db->setQuery($sql);
		$total = $db->loadResult();
		if (!$total)
		{
			$configSql = JPATH_ADMINISTRATOR . '/components/com_pmform/sql/plugins.pmform.sql';
			$sql       = JFile::read($configSql);
			$queries   = $db->splitSql($sql);
			if (count($queries))
			{
				foreach ($queries as $query)
				{
					$query = trim($query);
					if ($query != '' && $query{0} != '#')
					{
						$db->setQuery($query);
						$db->execute();
					}
				}
			}
		}

		#Update form fields table
		$fields = array_keys($db->getTableColumns('#__pf_form_fields'));
		//Update database schecme of fields setting for each form
		$updateData = false;
		if (!in_array('required', $fields))
		{
			$sql = "ALTER TABLE `#__pf_form_fields` ADD `required` TINYINT NOT NULL DEFAULT '0' ";
			$db->setQuery($sql);
			$db->execute();
			$updateData = true;
		}

		if (!in_array('published', $fields))
		{
			$sql = "ALTER TABLE `#__pf_form_fields` ADD `published` TINYINT NOT NULL DEFAULT '0' ";
			$db->setQuery($sql);
			$db->execute();
			$updateData = true;
		}

		if (!in_array('ordering', $fields))
		{
			$sql = "ALTER TABLE `#__pf_form_fields` ADD `ordering` INT NOT NULL DEFAULT '0' ";
			$db->setQuery($sql);
			$db->execute();
			$updateData = true;
		}
		if ($updateData)
		{
			//Get all forms currently in the system, and perform setting up
			$sql = 'SELECT id, `params`, enter_amount FROM #__pf_forms';
			$db->setQuery($sql);
			$rowForms = $db->loadObjectList();
			for ($i = 0, $n = count($rowForms); $i < $n; $i++)
			{
				$rowForm = $rowForms[$i];
				$params  = new JRegistry($rowForm->params);
				//Get all fields belong to this form
				$sql = "SELECT a.id, a.name, a.required, a.ordering, a.published, a.is_core FROM #__pf_fields AS a WHERE a.form_id=-1 OR a.id IN (SELECT field_id FROM #__pf_form_fields WHERE form_id=$rowForm->id) ORDER BY a.ordering";
				$db->setQuery($sql);
				$rowFields = $db->loadObjectList();
				$ordering  = 0;
				//Delete data from the table
				$sql = 'DELETE FROM #__pf_form_fields WHERE form_id=' . $rowForm->id;
				$db->setQuery($sql);
				$db->execute();

				if (count($rowFields))
				{
					foreach ($rowFields as $rowField)
					{
						$ordering++;
						if ($rowField->is_core)
						{
							$required  = 0;
							$published = 0;;
							if ($rowField->name == 'first_name' || $rowField->name == 'email')
							{
								$published = 1;
								$required  = 1;
							}
							elseif ($rowField->name == 'last_name')
							{
								if ($params->get('s_lastname', 1))
								{
									$published = 1;
									if ($params->get('r_lastname', 1))
										$required = 1;
								}
							}
							elseif ($rowField->name == 'amount')
							{
								if ($rowForm->enter_amount)
								{
									$published = 1;
									$required  = 1;
								}
							}
							else
							{
								if ($params->get('s_' . $rowField->name, 1))
								{
									$published = 1;
									if ($params->get('r_' . $rowField->name, 1))
										$required = 1;
								}
							}
						}
						else
						{
							$published = 1;
							$required  = $rowField->required;
						}
						$sql = "INSERT INTO #__pf_form_fields(form_id, field_id, required, ordering, published) VALUES($rowForm->id, $rowField->id, $required, $ordering, $published)";
						$db->setQuery($sql);
						$db->execute();
					}
				}
			}
		}

		## Alfter custom field table

		$fields = array_keys($db->getTableColumns('#__pf_fields'));
		if (!in_array('datatype_validation', $fields))
		{
			$sql = "ALTER TABLE  `#__pf_fields` ADD  `datatype_validation` TINYINT NOT NULL DEFAULT  '0' ;";
			$db->setQuery($sql);
			$db->execute();
		}

		if (!in_array('extra_attributes', $fields))
		{
			$sql = "ALTER TABLE  `#__pf_fields` ADD  `extra_attributes` VARCHAR( 255 ) NULL;";
			$db->setQuery($sql);
			$db->execute();
		}

		if (!in_array('max_length', $fields))
		{
			$sql = "ALTER TABLE  `#__pf_fields` ADD  `max_length` INT NOT NULL DEFAULT  '0';";
			$db->setQuery($sql);
			$db->execute();
		}

		if (!in_array('place_holder', $fields))
		{
			$sql = "ALTER TABLE  `#__pf_fields` ADD   `place_holder` VARCHAR( 255 ) NULL;";
			$db->setQuery($sql);
			$db->execute();
		}
		if (!in_array('multiple', $fields))
		{
			$sql = "ALTER TABLE  `#__pf_fields` ADD  `multiple` TINYINT NOT NULL DEFAULT  '0';";
			$db->setQuery($sql);
			$db->execute();
		}

		if (!in_array('validation_rules', $fields))
		{
			$sql = "ALTER TABLE  `#__pf_fields` ADD  `validation_rules` VARCHAR( 255 ) NULL;";
			$db->setQuery($sql);
			$db->execute();
		}
		if (!in_array('validation_error_message', $fields))
		{
			$sql = "ALTER TABLE  `#__pf_fields` ADD  `validation_error_message` VARCHAR( 255 ) NULL;";
			$db->setQuery($sql);
			$db->execute();
		}

		if (!in_array('field_mapping', $fields))
		{
			$sql = "ALTER TABLE  `#__pf_fields` ADD  `field_mapping` VARCHAR( 100 ) NULL;";
			$db->setQuery($sql);
			$db->execute();
		}

		if (!in_array('depend_on_field_id', $fields))
		{
			$sql = "ALTER TABLE  `#__pf_fields` ADD  `depend_on_field_id` INT NOT NULL DEFAULT '0';";
			$db->setQuery($sql);
			$db->execute();
		}

		if (!in_array('depend_on_options', $fields))
		{
			$sql = "ALTER TABLE  `#__pf_fields` ADD  `depend_on_options` TEXT NULL;";
			$db->setQuery($sql);
			$db->execute();
		}
		if (!in_array('fieldtype', $fields))
		{
			$sql = "ALTER TABLE  `#__pf_fields` ADD  `fieldtype` VARCHAR( 50 ) NULL;";
			$db->setQuery($sql);
			$db->execute();
			
			$typeMapping = array(
				0 => 'Text',
				1 => 'Textarea',
				2 => 'List',
				3 => 'Checkboxes',
				4 => 'Radio',
				5 => 'Date',
				6 => 'Heading',
				7 => 'Message',
				9 => 'File'
			);

			foreach ($typeMapping as $key => $value)
			{
				$sql = "UPDATE #__pf_fields SET fieldtype='$value' WHERE field_type='$key'";
				$db->setQuery($sql);
				$db->execute();
			}

			$sql = "UPDATE #__pf_fields SET fieldtype='List', multiple=1 WHERE field_type='8'";
			$db->setQuery($sql);
			$db->execute();

			$sql = 'UPDATE #__pf_fields SET fieldtype="Countries" WHERE name="country"';
			$db->setQuery($sql);
			$db->execute();
			//MySql, convert data to Json
			$sql = 'SELECT id, field_value FROM #__pf_field_value WHERE field_id IN (SELECT id FROM #__pf_fields WHERE field_type=3 OR field_type=8)';
			$db->setQuery($sql);
			$rowFieldValues = $db->loadObjectList();
			if (count($rowFieldValues))
			{
				foreach ($rowFieldValues as $rowFieldValue)
				{
					$fieldValue = $rowFieldValue->field_value;
					if (strpos($fieldValue, ',') !== false)
					{
						$fieldValue = explode(',', $fieldValue);
					}
					$fieldValue = json_encode($fieldValue);
					$sql        = 'UPDATE #__pf_field_value SET field_value=' . $db->quote($fieldValue) . ' WHERE id=' . $rowFieldValue->id;
					$db->setQuery($sql);
					$db->execute();
				}
			}
			$config = PMFormHelper::getConfig();
			if ($config->display_state_dropdown)
			{
				$sql = 'UPDATE #__pf_fields SET fieldtype="State" WHERE name="state"';
				$db->setQuery($sql);
				$db->execute();
			}

			//The amount field, need a special settings
			$sql = 'UPDATE #__pf_fields SET fee_field = 1, datatype_validation= 2, validation_rules="validate[required,custom[number]]", fee_formula="[FIELD_VALUE]" WHERE name="amount"';
			$db->setQuery($sql);
			$db->execute();

			//Update email field
			$sql = 'UPDATE #__pf_fields SET datatype_validation=3, validation_rules="validate[required,custom[email],ajax[ajaxEmailCall]]" WHERE name="email"';
			$db->setQuery($sql);
			$db->execute();
		}
		//Need to update other things

		$sql = "SELECT id, validation_rules FROM #__pf_fields WHERE required = 1";
		$db->setQuery($sql);
		$fields = $db->loadObjectList();
		foreach ($fields as $field)
		{
			if (empty($field->validation_rules))
			{
				$sql = 'UPDATE #__pf_fields SET validation_rules = "validate[required]" WHERE id=' . $field->id;
				$db->setQuery($sql);
				$db->execute();
			}
		}
		//Make sure validation is empty when required=0
		$sql = 'UPDATE #__pf_fields SET validation_rules = "" WHERE required=0 AND validation_rules="validate[required]"';
		$db->setQuery($sql);
		$db->execute();
	}


	/**
	 * Method to run after installing the component
	 */
	function postflight($type, $parent)
	{
		//Restore the modified language strings by merging to language files
		$registry = new JRegistry();
		foreach (self::$languageFiles as $languageFile)
		{
			$backupFile  = JPATH_ROOT . '/language/en-GB/bak.' . $languageFile;
			$currentFile = JPATH_ROOT . '/language/en-GB/' . $languageFile;
			if (JFile::exists($currentFile) && JFile::exists($backupFile))
			{
				$registry->loadFile($currentFile, 'INI');
				$currentItems = $registry->toArray();
				$registry->loadFile($backupFile, 'INI');
				$backupItems = $registry->toArray();
				$items       = array_merge($currentItems, $backupItems);
				$content     = "";
				foreach ($items as $key => $value)
				{
					$content .= "$key=\"$value\"\n";
				}
				JFile::write($currentFile, $content);
				//Delete the backup file
				JFile::delete($backupFile);
			}
		}

		//Create a blank css file
		if (!JFile::exists(JPATH_ROOT . '/components/com_pmform/assets/css/custom.css'))
		{
			$fp = fopen(JPATH_ROOT . '/components/com_pmform/assets/css/custom.css', 'w');
			fclose($fp);
		}

	}
}