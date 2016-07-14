<?php
/**
 * @version        4.2
 * @package        Joomla
 * @subpackage     Payment Form
 * @author         Tuan Pham Ngoc
 * @copyright      Copyright (C) 2012 - 2015 Ossolution Team
 * @license        GNU/GPL, see LICENSE.php
 */
defined('_JEXEC') or die;

class plgPmformScript extends JPlugin
{

	public function __construct(& $subject, $config)
	{
		parent::__construct($subject, $config);
		JTable::addIncludePath(JPATH_ADMINISTRATOR . '/components/com_pmform/table');
	}

	/**
	 * Render settings from
	 *
	 * @param $row
	 *
	 * @return array
	 */
	public function onEditForm($row)
	{
		ob_start();
		$this->drawSettingForm($row);
		$form = ob_get_contents();
		ob_end_clean();

		return array('title' => JText::_('PLG_PMFORM_SCRIPTS'),
		             'form'  => $form
		);
	}

	/**
	 * Store setting into database
	 *
	 * @param JTable  $row
	 * @param Boolean $isNew true if create new plan, false if edit
	 */
	public function onFormAfterSave($context, $row, $data, $isNew)
	{
		$params = new JRegistry($row->params);
		$params->set('payment_store_script', $data['payment_store_script']);
		$params->set('payment_active_script', $data['payment_active_script']);
		$row->params = $params->toString();

		$row->store();
	}

	/**
	 * Run the PHP script when subscription is stored in database
	 *
	 * @param $row
	 *
	 * @return bool
	 */
	public function onAfterStorePayment($row)
	{
		$params = $this->getFormParams($row->form_id);
		$script = trim($params->get('payment_store_script'));
		if ($script)
		{
			try
			{
				eval($script);
			}
			catch (Exception $e)
			{
				JFactory::getApplication()->enqueueMessage(JText::_('The PHP script is wrong. Please contact Administrator'), 'error');
			}
		}

		return true;
	}

	/**
	 * Run the PHP script when membership is activated
	 *
	 * @param $row
	 *
	 * @return bool
	 */
	public function onAfterPaymentSuccess($row)
	{
		$params = $this->getFormParams($row->form_id);
		$script = trim($params->get('payment_active_script'));
		if ($script)
		{
			try
			{
				eval($script);
			}
			catch (Exception $e)
			{
				JFactory::getApplication()->enqueueMessage(JText::_('The PHP script is wrong. Please contact Administrator'), 'error');
			}
		}

		return true;
	}

	/**
	 * Display form allows users to change setting for this subscription plan
	 *
	 * @param object $row
	 *
	 */
	private function drawSettingForm($row)
	{
		$params                            = new JRegistry($row->params);
		?>
		<table class="admintable adminform" style="width: 90%;">
			<tr>
				<td colspan="2">
					<div class="text-error" style="font-size: 16px;">This feature usually is usually used by developer know know how to write PHP code. Please only use this feature if you know programming in PHP and understand what you are doing</div>
				</td>
			</tr>
			<tr>
				<td width="220" class="key">
					<?php echo JText::_('PF_PAYMENT_STORED_SCRIPT'); ?>
				</td>
				<td>
					<textarea rows="10" cols="70" class="input-xxlarge" name="payment_store_script"><?php echo $params->get('payment_store_script'); ?></textarea>
				</td>
				<td>
					<?php echo JText::_('PF_PAYMENT_STORED_SCRIPT_EXPLAIN'); ?>
				</td>
			</tr>
			<tr>
				<td width="220" class="key">
					<?php echo JText::_('PF_PAYMENT_ACTIVE_SCRIPT'); ?>
				</td>
				<td>
					<textarea rows="10" cols="70" class="input-xxlarge" name="payment_active_script"><?php echo $params->get('payment_active_script'); ?></textarea>
				</td>
				<td>
					<?php echo JText::_('PF_PAYMENT_ACTIVE_SCRIPT_EXPLAIN'); ?>
				</td>
			</tr>
		</table>
	<?php
	}

	/**
	 * The params of the subscription plan
	 *
	 * @param $formId
	 *
	 * @return JRegistry
	 */
	private function getFormParams($formId)
	{
		$db = JFactory::getDbo();
		$query = $db->getQuery(true);
		$query->select('params')
			->from('#__pf_forms')
			->where('id = '. $formId);
		$db->setQuery($query);

		return new JRegistry($db->loadResult());
	}
}
