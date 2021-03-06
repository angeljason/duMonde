<?php
/**
 * Nooku Framework - http://nooku.org/framework
 *
 * @copyright   Copyright (C) 2007 - 2014 Johan Janssens and Timble CVBA. (http://www.timble.net)
 * @license     GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link        https://github.com/nooku/nooku-framework for the canonical source repository
 */

/**
 * Alphanumeric Filter
 *
 * @author  Johan Janssens <https://github.com/johanjanssens>
 * @package Koowa\Library\Filter
 */
class KFilterAlnum extends KFilterAbstract implements KFilterTraversable
{
    /**
     * Validate a variable
     *
     * @param   mixed   $value Value to be validated
     * @return  bool    True when the variable is valid
     */
    public function validate($value)
    {
        $value = trim($value);

        return ctype_alnum($value);
    }

    /**
     * Sanitize a variable
     *
     * @param   mixed   $value Value to be sanitized
     * @return  string
     */
    public function sanitize($value)
    {
        $value = trim($value);

        $pattern 	= '/[^\w]*/';
        return preg_replace($pattern, '', $value);
    }
}
