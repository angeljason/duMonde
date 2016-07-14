<?php
/**
 * Form Field class for the Joomla POSF.
 * Supports a message form field
 *
 * @package     Joomla.POSF
 * @subpackage  Form
 */
class POSFFormFieldMessage extends POSFFormField
{

	/**
	 * The form field type.
	 *
	 * @var    string
	 *	 
	 */
	protected $type = 'Message';

	/**
	 * Method to get the field input markup.
	 *
	 * @return  string  The field input markup.
	 *	 
	 */
	public function getInput()
	{
		return '<div id="field_' . $this->name . '" class="control-group eb-message">'.$this->description.'</div>';	
	}	
	/**
	 * Get control group used to display on form
	 *
	 * @see POSFFormField::getControlGroup()
	 */
	public function getControlGroup()
	{
		return $this->getInput();
	}
	/**
	 * Get output used for displaying on email and the detail page
	 *
	 * @see POSFFormField::getOutput()
	 */
	public function getOutput($tableLess)
	{
		if ($tableLess)
		{
			return $this->getInput();
		}
		else
		{
			return '<tr>' . '<td class="eb-message" colspan="2">' . $this->description . '</td></tr>';
		}
	}
}