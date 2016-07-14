/****
 * Payme method class
 * @param id
 * @param name
 * @param title
 * @param creditCard
 * @param cardType
 * @param cardCvv
 * @param cardHolderName
 * @return
 */
function PaymentMethod(name, creditCard, cardType, cardCvv, cardHolderName) {
	this.name = name ;	
	this.creditCard = creditCard ;
	this.cardType = cardType ;
	this.cardCvv = cardCvv ;
	this.cardHolderName = cardHolderName ;
}
/***
 * Get name of the payment method
 * @return string
 */
PaymentMethod.prototype.getName = function() {
	return this.name ;
}
/***
 * This is creditcard payment method or not	
 * @return int
 */
PaymentMethod.prototype.getCreditCard = function() {
	return this.creditCard ;
}
/****
 * Show creditcard type or not
 * @return string
 */
PaymentMethod.prototype.getCardType = function() {
	return this.cardType ;
}
/***
 * Check to see whether card cvv code is required
 * @return string
 */
PaymentMethod.prototype.getCardCvv = function() {
	return this.cardCvv ;
}
/***
 * Check to see whether this payment method require entering card holder name
 * @return
 */
PaymentMethod.prototype.getCardHolderName = function() {
	return this.cardHolderName ;
}
/***
* Get name of the payment method
* @return string
*/
PaymentMethod.prototype.getEnableRecurring = function() {
	  return this.enableRecurring ;
}
/***
 * Payment method class, hold all the payment methods
 */
function PaymentMethods() {
	this.length = 0 ;
	this.methods = new Array();
}
/***
 * Add a payment method to array
 * @param paymentMethod
 * @return
 */
 PaymentMethods.prototype.Add = function(paymentMethod) {	
	this.methods[this.length] = paymentMethod ;
	this.length = this.length + 1 ;
}
/***
 * Find a payment method based on it's name
 * @param name
 * @return {@link PaymentMethod}
 */
 PaymentMethods.prototype.Find = function(name) {
	for (var i = 0 ; i < this.length ; i++) {
		if (this.methods[i].name == name) {
			return this.methods[i] ;			
		}
	}
	return null ;
}

PMF.jQuery(function($){
	/**
	 * JD validate form
	 */
	PMFVALIDATEFORM = (function(formId){
        $(formId).validationEngine('attach', {
            onValidationComplete: function(form, status){
                if (status == true) {
                    form.on('submit', function(e) {
                        e.preventDefault();
                    });
                    return true;
                }
                // In case it is failed, we need to re-enable the button
                $('#btn-submit').removeAttr('disabled');
                $('#ajax-loading-animation').hide();

                return false;
            }
        });
	})

    /***
     * Process event when someone change a payment method
     */
    updatePaymentMethod = (function(){
        if($('input:radio[name^=payment_method]').length)
        {
            var paymentMethod = $('input:radio[name^=payment_method]:checked').val();
        }
        else
        {
            var paymentMethod = $('input[name^=payment_method]').val();
        }
        method = methods.Find(paymentMethod);
        if (method.getCreditCard()) {
            $('#tr_card_number').slideDown();
            $('#tr_exp_date').slideDown();
            $('#tr_cvv_code').slideDown();
            if (method.getCardType())
            {
                $('#tr_card_type').slideDown();
            }
            else
            {
                $('#tr_card_type').slideUp();
            }
            if (method.getCardHolderName())
            {
                $('#tr_card_holder_name').slideDown();
            }
            else
            {
                $('#tr_card_holder_name').slideUp();
            }
        }
        else
        {
            $('#tr_card_number').slideUp();
            $('#tr_exp_date').slideUp();
            $('#tr_cvv_code').slideUp();
            $('#tr_card_type').slideUp();
            $('#tr_card_holder_name').slideUp();
        }

        if (paymentMethod == 'os_echeck')
        {
            $('#tr_bank_rounting_number').slideDown();
            $('#tr_bank_account_number').slideDown();
            $('#tr_bank_account_type').slideDown();
            $('#tr_bank_name').slideDown();
            $('#tr_bank_account_holder').slideDown();
        }
        else
        {
            if ($('#tr_bank_rounting_number').length)
            {
                $('#tr_bank_rounting_number').slideUp();
                $('#tr_bank_account_number').slideUp();
                $('#tr_bank_account_type').slideUp();
                $('#tr_bank_name').slideUp();
                $('#tr_bank_account_holder').slideUp();
            }
        }
        if (paymentMethod == 'os_ideal')
        {
            $('#tr_bank_list').slideDown();
        }
        else
        {
            $('#tr_bank_list').slideUp();
        }
    });

	/***
	 * Process event when someone change a payment method
	 */
	changePaymentMethod = (function(){
		updatePaymentMethod();
        if ($('input[name^=show_payment_fee]').val() == 1)
        {
            calculateFormFee();
        }
	});


    calculateFormFee = (function(){
        $('#btn-submit').attr('disabled', 'disabled');
        $('#ajax-loading-animation').show();
        if($('input:radio[name^=payment_method]').length)
        {
            var paymentMethod = $('input:radio[name^=payment_method]:checked').val();
        }
        else
        {
            var paymentMethod = $('input[name^=payment_method]').val();
        }
        $.ajax({
            type: 'POST',
            url: siteUrl + 'index.php?option=com_pmform&task=calculate_form_fee&payment_method=' + paymentMethod,
            data: jQuery('#os_form input[name=\'form_id\'], #os_form input[name=\'coupon_code\'], #os_form .payment-calculation input[type=\'text\'], #os_form .payment-calculation input[type=\'checkbox\']:checked, #os_form .payment-calculation input[type=\'radio\']:checked, #os_form .payment-calculation select'),
            dataType: 'json',
            success: function(msg, textStatus, xhr) {
                $('#btn-submit').removeAttr('disabled');
                $('#ajax-loading-animation').hide();
                if ($('#total_amount'))
                {
                    $('#total_amount').val(msg.total_amount);
                }
                if ($('#discount_amount'))
                {
                    $('#discount_amount').val(msg.discount_amount);
                }
                if ($('#gross_amount'))
                {
                    $('#gross_amount').val(msg.gross_amount);
                }

                if ($('#payment_processing_fee'))
                {
                    $('#payment_processing_fee').val(msg.payment_processing_fee);
                }

                if (($('#gross_amount').length || $('#total_amount').length) && msg.gross_amount == 0)
                {
                    $('.payment_information').css('display', 'none');
                }
                else
                {
                    $('.payment_information').css('display', '');
                    updatePaymentMethod();
                }

                if (msg.coupon_valid == 1)
                {
                    $('#coupon_validate_msg').hide();
                }
                else
                {
                    $('#coupon_validate_msg').show();
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert(textStatus);
            }
        });
    });

    showHideDependFields = (function(fieldId, fieldName, fieldType){
        if (fieldType == 'Checkboxes')
        {
            var fieldValues = '';
            $('input[name="'+ fieldName +'[]"]:checked').each(function() {
                if (fieldValues)
                {
                    fieldValues += ',' + $(this).val();
                }
                else
                {
                    fieldValues += $(this).val();
                }
            });
        }
        else if (fieldType == 'Radio')
        {
            var fieldValues = $('input:radio[name="'+ fieldName +'"]:checked').val();
        }
        else
        {
            var fieldValues = $('#' + fieldName).val();
        }
        var data = {
            'task'	:	'get_depend_fields_status',
            'field_id' : fieldId,
            'field_values': fieldValues
        };
        $('#btn-submit').attr('disabled', 'disabled');
        $('#ajax-loading-animation').show();
        $.ajax({
            type: 'POST',
            url: siteUrl + 'index.php?option=com_pmform',
            data: data,
            dataType: 'json',
            success: function(msg, textStatus, xhr) {
                $('#btn-submit').removeAttr('disabled');
                $('#ajax-loading-animation').hide();
                var hideFields = msg.hide_fields.split(',');
                var showFields = msg.show_fields.split(',');
                for (var i = 0; i < hideFields.length ; i++)
                {

                    $('#' + hideFields[i]).hide();
                }
                for (var i = 0; i < showFields.length ; i++)
                {
                    $('#' + showFields[i]).show();
                }
                //Recalculate form field
                calculateFormFee();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert(textStatus);
            }
        });
    });
	/**
	 * build state field
	 */
	buildStateField = (function(stateFieldId, countryFieldId, defaultState){
		if($('#' + stateFieldId).length)
		{
			//set state
			if ($('#' + countryFieldId).length)
			{
				var countryName = $('#' + countryFieldId).val();
			}
			else 
			{
				var countryName = '';
			}			
			$.ajax({
				type: 'POST',
				url: siteUrl + 'index.php?option=com_pmform&task=get_states&country_name='+ countryName+'&field_name='+stateFieldId + '&state_name=' + defaultState,
				success: function(data) {
					$('#field_' + stateFieldId + ' .controls').html(data);
				},
				error: function(jqXHR, textStatus, errorThrown) {						
					alert(textStatus);
				}
			});			
			//Bind onchange event to the country 
			if ($('#' + countryFieldId).length)
			{
				$('#' + countryFieldId).change(function(){
					$('#field_' + stateFieldId + ' .controls select').after('<span class="wait">&nbsp;<img src="components/com_pmform/assets/images/loading.gif" alt="" /></span>');
					$.ajax({
						type: 'POST',
						url: siteUrl + 'index.php?option=com_pmform&task=get_states&country_name='+ $(this).val()+'&field_name=' + stateFieldId + '&state_name=' + defaultState,
						success: function(data) {
							$('#field_' + stateFieldId + ' .controls').html(data);
							$('.wait').remove();
						},
						error: function(jqXHR, textStatus, errorThrown) {						
							alert(textStatus);
						}
					});
					
				});
			}						
		}//end check exits state
	});
	
})