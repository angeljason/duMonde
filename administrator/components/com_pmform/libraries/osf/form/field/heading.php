<?php
class POSFFormFieldHeading extends POSFFormField
{
	/**
	 * The form field type.
	 *
	 * @var    string
	 *	 
	 */
	protected  $type = 'Heading';

	/**
	 * Method to get the field input markup.
	 *
	 * @return  string  The field input markup.
	 *	 
	 */
	protected function getInput()
	{
		return '<h3 class="eb-heading">'.$this->title.'</h3>';
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
			return '<tr>' . '<td class="eb-heading" colspan="2">' . $this->title . '</td></tr>';
		}
	}
}