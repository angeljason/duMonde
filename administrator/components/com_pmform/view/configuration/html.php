<?php
/**
 * @version        4.2
 * @package        Joomla
 * @subpackage     Payment Form
 * @author         Tuan Pham Ngoc
 * @copyright      Copyright (C) 2010 - 2015 Ossolution Team
 * @license        GNU/GPL, see LICENSE.php
 */
defined('_JEXEC') or die();

class PMFormViewConfigurationHtml extends POSFViewHtml
{
	public function display()
	{

		$db        = JFactory::getDbo();
		$query     = $db->getQuery(true);
		$config    = $this->model->getData();
		$options   = array();
		$options[] = JHtml::_('select.option', 0, JText::_('No integration'));
		if (file_exists(JPATH_ROOT . '/components/com_comprofiler/comprofiler.php'))
		{
			$options[] = JHtml::_('select.option', 1, JText::_('Community Builder'));
		}
		if (file_exists(JPATH_ROOT . '/components/com_community/community.php'))
		{
			$options[] = JHtml::_('select.option', 2, JText::_('JomSocial'));
		}
		if (JPluginHelper::isEnabled('user', 'profile'))
		{
			$options[] = JHtml::_('select.option', 3, JText::_('Joomla Profile'));
		}
		$lists ['load_twitter_bootstrap']         = JHtml::_('select.booleanlist', 'load_twitter_bootstrap', '', isset ($config->load_twitter_bootstrap) ? $config->load_twitter_bootstrap : 1);
		$lists ['load_jquery']                    = JHtml::_('select.booleanlist', 'load_jquery', '', isset ($config->load_jquery) ? $config->load_jquery : 1);
		$lists['cb_integration']                  = JHtml::_('select.genericlist', $options, 'cb_integration', ' ', 'value', 'text', $config->cb_integration);
		$lists['user_registration']               = JHtml::_('select.booleanlist', 'user_registration', '', $config->user_registration);
		$lists['show_login_box']                  = JHtml::_('select.booleanlist', 'show_login_box', '', $config->show_login_box);
		$lists['use_https']                       = JHtml::_('select.booleanlist', 'use_https', '', $config->use_https);
		$lists['enable_captcha']                  = JHtml::_('select.booleanlist', 'enable_captcha', '', $config->enable_captcha);
		$lists['show_confirmation_step']          = JHtml::_('select.booleanlist', 'show_confirmation_step', '', $config->show_confirmation_step);
		$lists['enable_payment_method_selection'] = JHtml::_('select.booleanlist', 'enable_payment_method_selection', '', $config->enable_payment_method_selection);
		$lists['show_coupon']                     = JHtml::_('select.booleanlist', 'show_coupon', '', $config->show_coupon);
		$lists['send_attachment_to_admin_email']  = JHtml::_('select.booleanlist', 'send_attachment_to_admin_email', '', $config->send_attachment_to_admin_email);


		$lists['activate_invoice_feature'] = JHtml::_('select.booleanlist', 'activate_invoice_feature', '', $config->activate_invoice_feature);
		$lists['send_invoice_to_customer'] = JHtml::_('select.booleanlist', 'send_invoice_to_customer', '', $config->send_invoice_to_customer);


		$query->select('id, title')
			->from('#__content')
			->order('title');
		$db->setQuery($query);
		$rows                 = $db->loadObjectList();
		$options              = array();
		$options[]            = JHtml::_('select.option', 0, JText::_('Select article'), 'id', 'title');
		$options              = array_merge($options, $rows);
		$lists['article_id']  = JHtml::_('select.genericlist', $options, 'article_id', ' class="inputbox" ', 'id', 'title', $config->article_id);
		$lists['active_term'] = JHtml::_('select.booleanlist', 'accept_term', '', $config->accept_term);

		$query->clear();
		$query->select('name AS `value`, name AS `text`')
			->from('#__pf_countries')
			->where('published = 1');
		$db->setQuery($query);
		$rowCountries                                 = $db->loadObjectList();
		$options                                      = array();
		$options[]                                    = JHtml::_('select.option', '', JText::_('Select defaul country'));
		$options                                      = array_merge($options, $rowCountries);
		$lists['country_list']                        = JHtml::_('select.genericlist', $options, 'default_country', '', 'value', 'text', $config->default_country);
		$lists['create_account_when_payment_success'] = JHtml::_('select.booleanlist', 'create_account_when_payment_success', '', $config->create_account_when_payment_success);

		$options = array();
		$options[] = JHtml::_('select.option', '', JText::_('PF_SELECT_FORMAT'));
		$options[] = JHtml::_('select.option', '%Y-%m-%d', 'Y-m-d');
		$options[] = JHtml::_('select.option', '%Y/%m/%d', 'Y/m/d');
		$options[] = JHtml::_('select.option', '%Y.%m.%d', 'Y.m.d');
		$options[] = JHtml::_('select.option', '%m-%d-%Y', 'm-d-Y');
		$options[] = JHtml::_('select.option', '%m/%d/%Y', 'm/d/Y');
		$options[] = JHtml::_('select.option', '%m.%d.%Y', 'm.d.Y');
		$options[] = JHtml::_('select.option', '%d-%m-%Y', 'd-m-Y');
		$options[] = JHtml::_('select.option', '%d/%m/%Y', 'd/m/Y');
		$options[] = JHtml::_('select.option', '%d.%m.%Y', 'd.m.Y');
		$lists['date_field_format'] = JHtml::_('select.genericlist', $options, 'date_field_format', '', 'value', 'text', isset($config->date_field_format) ? $config->date_field_format : 'Y-m-d');

		// Extra offline payment plugin messages
		$query->clear();
		$query->select('*')
			->from('#__pf_payment_plugins')
			->where('name LIKE "os_offline_%"')
			->where('published = 1');
		$db->setQuery($query);
		$extraOfflinePlugins = $db->loadObjectList();

		$this->lists                                  = $lists;
		$this->config                                 = $config;
		$this->extraOfflinePlugins                   = $extraOfflinePlugins;

		parent::display();
	}
}