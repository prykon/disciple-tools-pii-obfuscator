
jQuery(document).ajaxStop(function() {
    jQuery('#table-content tr ul a').html(`<img src="http://localhost:10033/wp-content/plugins/disciple-tools-pii-obfuscator/redacted.svg">`);
})