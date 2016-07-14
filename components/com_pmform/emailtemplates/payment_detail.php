<?php defined('_JEXEC') or die; ?>
<form id="adminForm" class="form form-horizontal">
	<div class="control-group">
		<label class="control-label">
			<?php echo JText::_('PF_FORM'); ?>
		</label>
		<div class="controls">
			<?php echo $formTitle; ?>
		</div>
	</div>
	<?php
	if (isset($couponCode))
	{
	?>
	<div class="control-group">
		<label class="control-label">
			<?php echo JText::_('PF_COUPON'); ?>
		</label>
		<div class="controls">
			<?php echo $couponCode; ?>
		</div>
	</div>
	<?php
	}
	if ($enterAmount && $row->amount == $row->total_amount)
	{
		$form->removeField('amount');
	}
	echo $form->getOutput();
	if ($row->total_amount > 0)
	{
	?>
		<div class="control-group">
			<label class="control-label">
				<?php echo JText::_('PF_TOTAL_AMOUNT'); ?>
			</label>
			<div class="controls">
				<?php echo PMFormHelper::formatCurrency($row->total_amount, $config); ?>
			</div>
		</div>
		<?php
		if ($row->discount_amount > 0 || $row->payment_processing_fee > 0)
		{
			if ($row->discount_amount > 0)
			{
			?>
				<div class="control-group">
					<label class="control-label">
						<?php echo JText::_('PF_COUPON_DISCOUNT'); ?>
					</label>
					<div class="controls">
						<?php echo PMFormHelper::formatCurrency($row->discount_amount, $config); ?>
					</div>
				</div>
			<?php
			}
			if ($row->payment_processing_fee > 0)
			{
			?>
				<div class="control-group">
					<label class="control-label">
						<?php echo JText::_('PF_PAYMENT_FEE'); ?>
					</label>
					<div class="controls">
						<?php echo PMFormHelper::formatCurrency($row->payment_processing_fee, $config); ?>
					</div>
				</div>
			<?php
			}
			?>
			<div class="control-group">
				<label class="control-label">
					<?php echo JText::_('PF_GROSS_AMOUNT'); ?>
				</label>
				<div class="controls">
					<?php echo PMFormHelper::formatCurrency($row->gross_amount, $config); ?>
				</div>
			</div>
			<?php
		}
		if ($row->total_amount > 0 || $row->gross_amount > 0)
		{
			$method = os_payments::getPaymentMethod($row->payment_method);
			if ($method)
			{
			?>
				<div class="control-group">
					<label class="control-label">
						<?php echo JText::_('PF_PAYMENT_OPTION');?>
					</label>
					<div class="controls">
						<?php echo JText::_($method->getTitle()); ?>
					</div>
				</div>
			<?php
			}
			?>
			<div class="control-group">
				<label class="control-label">
					<?php echo JText::_('PF_TRANSACTION_ID');?>
				</label>
				<div class="controls">
					<?php echo $row->transaction_id; ?>
				</div>
			</div>
			<?php
		}
	}
	?>
</form>