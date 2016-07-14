<?php
/**
 * Abstract Form Field class for the POSF framework
 *
 * @package     Joomla.POSF
 * @subpackage  Form
 */
abstract class POSFFormField
{

	/**
	 * The form field type.
	 *
	 * @var    string	 
	 */
	protected $type;

	/**
	 * The name (and id) for the form field.
	 *
	 * @var    string	 
	 */
	protected $name;

	/**
	 * Title of the form field
	 * 
	 * @var string
	 */
	protected $title;

	/**
	 * The current value of the form field.
	 *
	 * @var    mixed
	 */
	protected $value;

	/**
	 * The object store form field definition
	 *
	 * @var JTable
	 */
	protected $row;

    /**
     * This field is visible or hidden on the form
     *
     * @var bool
     */
    protected $visible = true;

	/**
	 * This field is used in fee calculation or not
	 *
	 * @var bool
	 */
	protected $feeCalculation = false;

	/**
	 * The html attributes of the field
	 * 
	 * @var array
	 */
	protected $attributes = array();
	
	/**
	 * The input for the form field.
	 *
	 * @var    string	
	 */
	protected $input;

	/**
	 * Method to instantiate the form field object.
	 *
	 * @param   JTable  $row  the table object store form field definitions
	 * @param	mixed	$value the initial value of the form field
	 *
	 */
	public function __construct($row, $value = null)
	{
		$this->name = $row->name;
		$this->title = JText::_($row->title);
		$this->value = $value;
		$this->row = $row;
        $cssClasses = array();
        if ($row->css_class)
        {
            $cssClasses[] = $row->css_class;
        }
		if (!$row->required && $row->validation_rules == 'validate[required]')
		{
			$row->validation_rules = '';
		}

        if ($row->validation_rules)
        {
            $cssClasses[] = $row->validation_rules;
        }
        if (count($cssClasses))
        {
            $this->attributes['class'] = implode(' ', $cssClasses);
        }
	}

	/**
	 * Method to get certain otherwise inaccessible properties from the form field object.
	 *
	 * @param   string  $name  The property name for which to the the value.
	 *
	 * @return  mixed  The property value or null.
	 *	 
	 */
	public function __get($name)
	{
		switch ($name)
		{							
			case 'type':
			case 'name':				
			case 'title':
			case 'value':
			case 'row':
			case 'visible':
				return $this->{$name};
				break;
			case 'description':
			case 'extra_attributes':
			case 'required':
			case 'fee_field':
			case 'fee_formula':
			case 'id':
			case 'depend_on_field_id':
			case 'depend_on_options':
			case 'default_values':
				return $this->row->{$name};
				break;
			case 'input':
				// If the input hasn't yet been generated, generate it.
				if (empty($this->input))
				{
					$this->input = $this->getInput();
				}
				return $this->input;
				break;
		}
		
		return null;
	}

	/**
	 * Simple method to set the value for the form field
	 *
	 * @param   mixed  $value  Value to set
	 *	 	
	 */
	public function setValue($value)
	{
		$this->value = $value;
	}

	/**
	 * Method to get the field input markup.
	 *
	 * @return  string  The field input markup.
	 *	 
	 */
	abstract protected function getInput();

	/**
	 * Method to get a control group with label and input.
	 *
	 * @return  string  A string containing the html for the control goup
	 *
	 */
	public function getControlGroup($tableLess = true)
	{
		if ($this->type == 'hidden')
		{
			return $this->getInput();
		}
		else
		{
            $controlGroupAttributes = 'id="field_'.$this->name.'"';
            if(!$this->visible)
            {
                $controlGroupAttributes .= ' style="display:none;" ';
            }
			$class = $this->feeCalculation ? ' payment-calculation' : '';
			if ($tableLess)
			{

				return '<div class="control-group'.$class.'" '.$controlGroupAttributes.'>
							<label class="control-label" for="'.$this->name.'">'
											. $this->title
											.($this->required ? '<span class="required">*</span>' : '')
											.(strlen(trim($this->description)) ? '<p class="field_description">'.$this->description.'</p>' : '')
							. '</label>
						<div class="controls">
							' . $this->getInput(). '
						</div>
					</div>';
			}
			else 
			{
				return '<tr '.$controlGroupAttributes.'>
							<td class="key">'
											. $this->title .($this->required ? '<span class="required">*</span>' : ''). '
							</td>
						<td>
							' . $this->getInput(). '
						</td>
					</tr>';
			}				
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
		if (is_string($this->value) && is_array(json_decode($this->value)))
		{
			$fieldValue = implode(', ', json_decode($this->value));
		}
		else
		{
			$fieldValue = $this->value;
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

    /**
     * Add attribute to the form field
     * @param string $name
     */
    public function setAttribute($name, $value)
    {
        $this->attributes[$name] = $value;
    }
    /**
     * Get data of the given attribute
     * @param string $name
     * @return string
     */
    public function getAttribute($name)
    {
        return $this->attributes[$name];
    }

    /**
     * Set visibility status for the field on form
     *
     * @param $visible
     */
    public function setVisibility($visible)
    {
        $this->visible = $visible;
    }

	/**
	 *
	 * @param bool $feeCalculation
	 */
	public function setFeeCalculation($feeCalculation)
	{
		$this->feeCalculation = $feeCalculation;
	}
	/**
	 * Build an HTML attribute string from an array.
	 *
	 * @param  array  $attributes
	 * @return string
	 */
	public function buildAttributes()
	{
		$html = array();
		foreach ((array) $this->attributes as $key => $value)
		{
			if (is_bool($value))
			{
				$html[] = " $key ";
			}
			else
			{
				
				$html[] = $key . '="' . htmlentities($value, ENT_QUOTES, 'UTF-8', false) . '"';
			}
		}
		
		return count($html) > 0 ? ' ' . implode(' ', $html) : '';
	}
}
