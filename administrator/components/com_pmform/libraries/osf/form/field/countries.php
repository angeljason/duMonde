<?php
/**
 * Supports a custom field which display list of countries
 *
 * @package     Joomla.POSF
 * @subpackage  Form
 */
class POSFFormFieldCountries extends POSFFormFieldList
{

	/**
	 * The form field type.
	 *
	 * @var    string	 
	 */
	public $type = 'Countries';

	/**
	 * Method to get the custom field options.
	 * Use the query attribute to supply a query to generate the list.
	 *
	 * @return  array  The field option objects.
	 *
	 */
	protected function getOptions()
	{
		try
		{
			$db = JFactory::getDbo();
			$query = $db->getQuery(true);
			$query->select('name AS `value`, name AS `text`')
				->from('#__pf_countries')
                ->order('name');
			$db->setQuery($query);
			$options = array();
			$options[] = JHtml::_('select.option', '', JText::_('PF_SELECT_COUNTRY'));
			$options = array_merge($options, $db->loadObjectList());
		}
		catch (Exception $e)
		{
			$options = array();
		}

		return $options;
	}
}
