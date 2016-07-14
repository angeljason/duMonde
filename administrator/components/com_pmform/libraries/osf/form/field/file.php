<?php
class POSFFormFieldFile extends POSFFormField
{

	/**
	 * The form field type.
	 *
	 * @var    string
	 *	 
	 */
	protected  $type = 'File';
	
	/**
	 * Method to instantiate the form field object.
	 *
	 * @param   JTable  $row  the table object store form field definitions
	 * @param	mixed	$value the initial value of the form field
	 *
	 */
	public function __construct($row, $value = null, $fieldSuffix = null)
	{
		parent::__construct($row, $value, $fieldSuffix);				
		if ($row->size)
		{
			$this->attributes['size'] = $row->size;
		}
	}

	/**
	 * Method to get the field input markup.
	 *
	 * @return  string  The field input markup.
	 *	 
	 */
	protected function getInput()
	{
		$attributes = $this->buildAttributes();
		$uploadFolder = PMFormHelper::getConfigValue('path_upload');
		if (!$uploadFolder)
		{
			$uploadFolder = 'images/com_pmform';
		}
		$pathUpload = JPATH_ROOT . '/'.$uploadFolder;
		if ($this->value && file_exists($pathUpload.'/'.$this->value))
		{
			return '<input type="file" name="' . $this->name . '" id="' . $this->name . '" value=""' . $attributes. $this->extra_attributes. ' />. '.JText::_('PF_CURRENT_FILE').' <strong>'.$this->value.'</strong> <a href="index.php?option=com_pmform&task=download_file&file_name='.$this->value.'">'.JText::_('PF_DOWNLOAD').'</a>';
		}
		else 
		{
			return '<input type="file" name="' . $this->name . '" id="' . $this->name . '" value=""' . $attributes. $this->extra_attributes. ' />';
		}		
	}
}