
kQuery.validator.addMethod("storagepath", function(value) {
    return /^[0-9A-Za-z:_\-\/\\\.]+$/.test(value);
}, Koowa.translate('Folder names can only contain letters, numbers, dash, underscore or colons'));

kQuery(function($) {
    var extensions = $('#allowed_extensions'),
        tag_list = extensions.tagsInput({
            removeWithBackspace: false,
            width: '100%',
            height: '100%',
            animate: true,
            defaultText: Koowa.translate('Add another extension...')
        }),
        filetypes = extensions.data('filetypes'),
        labels = {
            'audio': Koowa.translate('Audio files'),
            'archive': Koowa.translate('Archive files'),
            'document': Koowa.translate('Documents'),
            'image': Koowa.translate('Images'),
            'video': Koowa.translate('Video files')
        },
        list = $('#extension_groups'),
        group = $('#config-group').find('li')[0];

    $.each(filetypes, function(key, value) {
        var label = labels[key],
            el = $(group).clone();

        el.find('span').text(label);
        el.find('a').data('extensions', value);
        list.append(el);
    });

    list.on('click', 'a', function(e) {
        e.preventDefault();

        var el = $(this),
            method = (el.hasClass('add') ? 'add' : 'remove') + 'Tag',
            extensions = el.data('extensions');

        $.each(extensions, function(i, extension) {
            tag_list[method](extension, {unique: true, mark_input: false});
        });
    });

    var evt = function() {
        var value = $('#maximum_size').val()*1048576;

        $('<input type="hidden" name="maximum_size" />').val(value).appendTo($('.-koowa-form'));
    };

    $('.-koowa-form').on('koowa:beforeApply', evt).on('koowa:beforeSave', evt);

    $('#advanced-permissions-toggle').on('click', function(e){
        e.preventDefault();

        $.magnificPopup.open({
            items: {
                src: $('#advanced-permissions'),
                type: 'inline'
            }
        });
    });

    $('.edit_document_path').click(function(event) {
        var $this = $(this);

        event.preventDefault();

        $this.parent().siblings('input').prop('disabled', false);
        $this.parents('.input-group').removeClass('input-group');
        $this.remove();
    });

    var checkbox      = $('.file_size_checkbox'),
        max_size      = $('#maximum_size'),
        last_value    = null,
        checkboxEvent = function() {
            var checked = checkbox.find('input').prop('checked');
            max_size.prop('disabled', checked);

            if (checked) {
                last_value = max_size.val();
                max_size.val('');
            } else if (last_value) {
                max_size.val(last_value);
            }
        };

    checkbox.change(checkboxEvent);
    checkboxEvent();
});