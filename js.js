
        var navigatorMessageMap = {
            'mac': 'macos',
            'iphone': 'macos',
            'win': 'windows'
        };

        var platform = navigator.platform.toLowerCase(); // 'macintel'
        
        for (var key in navigatorMessageMap) {
            key = key.toLowerCase();
            var version = navigatorMessageMap[key];

            if (platform.indexOf(key) >= 0) {

                var messageEls = document.querySelectorAll('.download-message');

                for (var i = 0; i < messageEls.length; i++) {
                    if (messageEls[i].getAttribute('data-version') == version ) {
                        messageEls[i].style.display = 'block';
                    }
                }
            }
        }