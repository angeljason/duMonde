<?php
class POSFFormFieldDate extends POSFFormField
{

	/**
	 * The form field type.
	 *
	 * @var    string
	 *
	 */
	protected $type = 'Date';

	/**
	 * Method to get the field input markup.
	 *
	 * @return  string  The field input markup.
	 *
	 */
	protected function getInput()
	{
		$config     = PMFormHelper::getConfig();
		$dateFormat = $config->date_field_format ? $config->date_field_format : '%Y-%m-%d';
		$attributes = $this->buildAttributes();
		try
		{
			return JHtml::_('calendar', $this->value, $this->name, $this->name, $dateFormat, ".$attributes.");
		}
		catch (Exception $e)
		{
			return JHtml::_('calendar', '', $this->name, $this->name, $dateFormat, ".$attributes.") . ' Value <strong>' . $this->value . '</strong> is invalid format.';
		}
	}

	/**
	 * Get output of the field using for sending email and display on the registration complete page
	 * @param bool $tableless
	 * @return string
	 */
	public function getOutput($tableLess = true)
	{
		if(!$this->visible)
		{
			return;
		}

		$fieldValue = $this->value;

		if ($fieldValue)
		{
			$config     = PMFormHelper::getConfig();
			try
			{
				$fieldValue = JHtml::_('date', $fieldValue, $config->date_format, null);
			}
			catch (Exception $e)
			{

			}
		}

		if ($tableLess)
		{
			return '<div class="control-group">' . '<div class="control-label">' . $this->title . '</div>' . '<div class="controls">' . $fieldValue .
			'</div>' . '</div>';
		}
		else
		{
			return '<tr>' . '<td class="title_cell">' . $this->title . '</td>' . '<td class="field_cell">' . $fieldValue . '</td>' . '</tr>';
		}
	}
}