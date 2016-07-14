<?php
/**
* @version      1.0.2
* @package      Joomdle - Hikashop
* @copyright    Qontori Pte Ltd
* @license      http://www.gnu.org/licenses/gpl-3.0.html GNU/GPL
*/

// no direct access
defined( '_JEXEC' ) or die( 'Restricted access' );

jimport( 'joomla.plugin.plugin' );

class  plgSystemJoomdlehikashopgroups extends JPlugin
{
	function onAfterOrderUpdate ($order, $send_email)
    {
        $this->order_updated ($order);
    }
    
    function  onAfterOrderCreate ($order, $do)
    {
        $this->order_updated ($order);
    }
    
    function order_updated ($order)
	{
		if ($order->order_status != 'confirmed')
			return;

		require_once(JPATH_ADMINISTRATOR.'/components/com_joomdle/helpers/content.php');
		require_once(JPATH_ADMINISTRATOR.'/components/com_joomdle/helpers/shop.php');
		require_once(JPATH_ADMINISTRATOR.'/components/com_joomdle/helpers/parents.php');
		require_once( JPATH_ADMINISTRATOR.'/components/com_hikashop/helpers/helper.php' );


		/* Get Joomdle courses category */
		$params = &JComponentHelper::getParams( 'com_joomdle' );
		$courses_category = $params->get( 'courses_category' );
		$buy_for_children = $params->get( 'buy_for_children' );
		$send_enrol_emails = $params->get( 'send_enrol_emails' );

		$order_class = hikashop_get('class.order');
	//	$order_data = $order_class->loadFullOrder ($order->order_id); // For some reason, this does not work from Paypal, so we need to manually get the order and load the products
		$order_data = $order_class->get ($order->order_id);

		$db           =& JFactory::getDBO();
		$query = 'SELECT a.* FROM '.hikashop_table('order_product').' AS a WHERE a.order_id = '.$order->order_id;
		$db->setQuery($query);
		$order_data->products = $db->loadObjectList();

		$products = $order_data->products;

		$userClass = hikashop_get('class.user');
		$user = $userClass->get($order_data->order_user_id);
		
		if ($products)
		{
			foreach ($products as $product)
			{

				$product_class = hikashop_get('class.product');
				$cats = $product_class->getCategories ($product->product_id);
				// if it is a variant, it will have no categories, so we need to check parent
				if (!$cats)
				{
					$query = 'SELECT product_parent_id FROM '.hikashop_table('product').' AS a WHERE a.product_id = '. $db->quote ($product->product_id);
					$db->setQuery($query);
					$parent_id = $db->loadResult();
					$cats = $product_class->getCategories ($parent_id);
				}

				/* Only process products in the Joomdle courses category */
				if (in_array ($courses_category, $cats))
				{
					/* Update user info in Moodle with Hikashop info */
					JoomdleHelperContent::call_method ("create_joomdle_user", $user->username);

					/* Enrol the user / update purchased courses */
					if ($buy_for_children)
					{
						if (strncmp ( $product->order_product_code, 'bundle_', 7) == 0)
						{
							//bundle
							JoomdleHelperParents::purchase_bundle ($user->username, $product->order_product_code,  $product->order_product_quantity);
						}
						else
						{
							JoomdleHelperParents::purchase_course ($user->username, $product->order_product_code,  $product->order_product_quantity);
						}
					}
					else 
					{
						if (strncmp ( $product->order_product_code, 'bundle_', 7) == 0)
						{
							//bundle
							JoomdleHelperShop::enrol_bundle ($user->username, $product->order_product_code);
						}
						else
						{
							//course
							// Check if course has group
							$group = '';
							$params = unserialize ($product->order_product_options);
							foreach ($params as $param) {

								$group = $param->characteristic_value;
								break; // This assumes group  will be the first attribute in product
							}
							if ($group)
							{
								$pieces = explode ('_', $product->order_product_code);
								$course_id = (int) $pieces[0];
								$pieces = explode (':', $group);
								$course['id'] = $course_id;
								$group_id = (int) $pieces[0];
								$course['group_id'] = $group_id;
								$courses = array ($course);
								JoomdleHelperContent::call_method ('multiple_enrol_to_course_and_group', $user->username, $courses, 5);
							}
							else
								JoomdleHelperContent::enrolUser ($user->username, $product->order_product_code);

							/* Send confirmation email */
							if ($send_enrol_emails)
								JoomdleHelperShop::send_confirmation_email ($user->email, $product->order_product_code);
						}
					}

				}
			}

		}
	}

	function enrol_user_with_start_date ($username, $id, $start_date)
    {
        $timestart = strtotime($start_date);

        $params = &JComponentHelper::getParams( 'com_joomdle' );
        if ($params->get( 'use_profiletypes' ))
        {
            $moodle_role = JoomdleHelperProfiletypes::get_user_profile_role ($username);
            if (!$moodle_role)
                $moodle_role = 5;
            $return = JoomdleHelperContent::call_method ('enrol_user_with_start_date', $username, (int) $id, (int) $moodle_role, $timestart);
        }
        else
        {
            $return = JoomdleHelperContent::call_method ('enrol_user_with_start_date', $username, (int) $id, 5, $timestart); //5  = student
        }

        return $return;

    }


}
