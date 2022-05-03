
jQuery(document).ajaxStop(function() {
    let redacted_css = `
    <style>
            .redacted {
                background-image: url('http://localhost:10033/wp-content/plugins/disciple-tools-pii-obfuscator/redacted.svg');
                transition: 2s width;
                width: 0%;
            }
            .stroke {
                width: 100%;
            }
        </style>
    `;
    jQuery('style').html( redacted_css );
    let redacted_html = jQuery('#table-content').html().replaceAll('>REDACTED<', '><img src="http://localhost:10033/wp-content/plugins/disciple-tools-pii-obfuscator/redacted.svg" class="redacted"> REDACTED <');
    jQuery('#table-content').html(redacted_html);
    jQuery('.redacted').addClass('stroke');
})