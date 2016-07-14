<?php 
// no direct access
defined('_JEXEC') or die('Restricted access');

$linkstarget = $comp_params->get('linkstarget');

if ($linkstarget == 'wrapper')
    $open_in_wrapper = 1;
else
    $open_in_wrapper = 0;

if ($linkstarget == "new")
    $target = " target='_blank'";
else $target = "";

?>

	<ul class="joomdlebadges<?php echo $moduleclass_sfx; ?>">
<?php
	$i = 0;
	if (is_array($badges))
	foreach ($badges as $badge) {

		if ($open_in_wrapper)
			$url = 'index.php?option=com_joomdle&view=wrapper&moodle_page_type=badge&hash=' . $badge['hash'];
		else
			$url = $moodle_url . '/badges/badge.php?hash=' . $badge['hash'];
		$image_url = $badge['image_url'];

		?><li>
				<a <?php echo $target; ?> href="<?php echo $url; ?>">
						<img src='<?php echo $image_url; ?>'><span class='joomdlebadge-name'><?php echo $badge['name']; ?></span>
				</a>
		</li>
		<?php
	}

?>
	</ul>
