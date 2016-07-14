<?php defined('_JEXEC') or die ; ?>
<style>
	<?php echo $css ; ?>
</style>
<table width="100%">
	<tr>
		<td class="title_cell" width="25%">
			<?php echo JText::_('PF_FORM'); ?>
		</td>
		<td>
			<?php echo $formTitle; ?>
		</td>
	</tr>
	<?php
	if (isset($username))
	{
	?>
		<tr>
			<td class="title_cell" width="35%">
				<?php echo  JText::_('PF_USERNAME') ?>
			</td>
			<td class="field_cell">
				<?php echo $username; ?>
			</td>
		</tr>
	<?php
	}

	if (isset($password) && !$toAdmin)
	{
	?>
		<tr>
			<td class="title_cell" width="35%">
				<?php echo  JText::_('PF_PASSWORD') ?>
			</td>
			<td class="field_cell">
				<?php echo $password; ?>
			</td>
		</tr>
	<?php
	}

	if (isset($couponCode))
	{
	?>
		<tr>
			<td class="title_cell">
				<?php echo JText::_('PF_COUPON'); ?>
			</td>
			<td>
				<?php echo $couponCode; ?>
			</td>
		</tr>
	<?php
	}
	if ($enterAmount && $row->amount == $row->total_amount)
	{
		$form->removeField('amount');
	}
	echo $form->getOutput(false);
	if ($row->total_amount > 0)
	{
	?>
		<tr>
			<td class="title_cell">
				<?php echo JText::_('PF_TOTAL_AMOUNT'); ?>
			</td>
			<td>
				<?php echo PMFormHelper::formatCurrency($row->total_amount, $config); ?>
			</td>
		</tr>
		<?php
		if ($row->discount_amount > 0 || $row->payment_processing_fee > 0)
		{
			if ($row->discount_amount > 0)
			{
			?>
				<tr>
					<td class="title_cell">
						<?php echo JText::_('PF_COUPON_DISCOUNT'); ?>
					</td>
					<td>
						<?php echo PMFormHelper::formatCurrency($row->discount_amount, $config); ?>
					</td>
				</tr>
			<?php
			}

			if ($row->payment_processing_fee > 0)
			{
			?>
				<tr>
					<td class="title_cell">
						<?php echo JText::_('PF_PAYMENT_FEE'); ?>
					</td>
					<td>
						<?php echo PMFormHelper::formatCurrency($row->payment_processing_fee, $config); ?>
					</td>
				</tr>
			<?php
			}
			?>
				<tr>
					<td class="title_cell">
						<?php echo JText::_('PF_GROSS_AMOUNT'); ?>
					</td>
					<td>
						<?php echo PMFormHelper::formatCurrency($row->gross_amount, $config); ?>
					</td>
				</tr>
			<?php
		}
		if ($row->total_amount > 0 || $row->gross_amount > 0)
		{
			$method = os_payments::getPaymentMethod($row->payment_method);
			if ($method)
			{
			?>
				<tr>
					<td class="title_cell">
						<?php echo JText::_('PF_PAYMENT_OPTION');?>
					</td>
					<td>
						<?php echo JText::_($method->getTitle()); ?>
					</td>
				</tr>
			<?php
			}
			?>
			<tr>
				<td class="title_cell">
					<?php echo JText::_('PF_TRANSACTION_ID');?>
				</td>
				<td>
					<?php echo $row->transaction_id; ?>
				</td>
			</tr>
		<?php
		}
	}
	?>
</table>