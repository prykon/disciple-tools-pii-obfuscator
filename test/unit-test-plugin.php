<?php

class PluginTest extends TestCase
{
    public function test_plugin_installed() {
        activate_plugin( 'disciple-tools-pii-obfuscator/disciple-tools-pii-obfuscator.php' );

        $this->assertContains(
            'disciple-tools-pii-obfuscator/disciple-tools-pii-obfuscator.php',
            get_option( 'active_plugins' )
        );
    }
}
