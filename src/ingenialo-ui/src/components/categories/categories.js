const categoriesArray = [
    {
        'id':1,
        'name':'Arduino',
        'description':'',
        'products':[
            {
                "id": 2,
                "images": [
                    {
                        "id": 8,
                        "image": "/media/products/2/102035493.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.764862Z",
                        "updated_at": "2020-09-24T07:26:39.764892Z",
                        "product": 2
                    },
                    {
                        "id": 9,
                        "image": "/media/products/2/3846484099.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.770912Z",
                        "updated_at": "2020-09-24T07:26:39.770939Z",
                        "product": 2
                    },
                    {
                        "id": 10,
                        "image": "/media/products/2/2810155380.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.776011Z",
                        "updated_at": "2020-09-24T07:26:39.776032Z",
                        "product": 2
                    }
                ],
                "title": "Adafruit FONA - Mini Cellular GSM Breakout uFL Version",
                "slug": "fona1",
                "description": "Ring, Ring! Who's that callin'? It's your breadboard! Introducing Adafruit FONA MiniGSM, an adorable all-in-one cellular phone module that lets you add voice, text, SMS and data to your project in an adorable little package.\r\n\r\n**Please note: The T-Mobile GSM network is shutting down in the USA over the course of 2020 and beyond, so please be aware these are not for long term usage in the USA! [Please check out the FONA 3G for next-generation usage](https://www.adafruit.com/product/2687).**  \r\n\r\nThis module measures only 1.75\"x1.25\" but packs a surprising amount of technology into its little frame. At the heart is a GSM cellular module (we use the latest SIM800) the size of a postage stamp. This module can do just about everything. [This version has a uFL connector. For the SMA version, click here!](https://www.adafruit.com/products/1963)\r\n\r\n*   Quad-band 850/900/1800/1900MHz - connect onto any global GSM network with any 2G SIM (in the USA, T-Mobile is suggested)\r\n*   Make and receive voice calls using a headset OR an external 8Ω speaker + electret microphone\r\n*   Send and receive SMS messages\r\n*   Send and receive GPRS data (TCP/IP, HTTP, etc.)\r\n*   Scan and receive FM radio broadcasts (yeah, we don't exactly know why this was included but it works really well)\r\n*   PWM/Buzzer vibrational motor control\r\n*   AT command interface with \"auto baud\" detection\r\n\r\nSounds delicious, right? So we plated this fine module onto a little breakout with all the extras you need to make your next project shine:\r\n\r\n*   Onboard LiPoly battery charging circuitry so you can take your project on the go. Use any [500mAh+ LiPoly or LiIon battery](https://www.adafruit.com/search?q=500mah+lithium+ion+polymer+battery) and recharge over the MicroUSB when necessary. Two LEDs let you know when its charging and done\r\n*   Standard 4-pole TRRS headphone jack. Use any 'Android' or 'iPhone'-compatible headset with mic\r\n*   Breakouts for external 8Ω speaker and electret mic if you don't want to use a headphone\r\n*   Level shifting circuitry so you can run it with 2.8V to 5V logic.\r\n*   Vibrational motor (buzzer) driver so you can have noiseless notifications\r\n*   uFL connections for external antenna\r\n*   Indicator LEDs for power and network connectivity\r\n*   Standard SIM slides into the back\r\n\r\nOn its own, this module can't do anything. It requires a microcontroller to drive it! We suggest and use [an Arduino](https://www.adafruit.com/category/17) but any 3-5V microcontroller with a UART can send and receive commands over the RX/TX pins.  \r\n\r\n**You will also need some required accessories to make FONA work. These are not included!**\r\n\r\n*   **SIM Card! [](https://www.adafruit.com/products/2505) **[A 2G Mini SIM card is required to do anything on the cellular network. US AT&T no longer sells 2G SIMs and T-Mobile will shut off their 2G network over the course of 2020.](https://www.adafruit.com/products/2505)\r\n*   **Lipoly Battery** - 500mAh or larger! This [500mAh](https://www.adafruit.com/product/1578) battery, [or this 1200mAh](https://www.adafruit.com/products/258) will work great.\r\n*   **[MicroUSB cable](https://www.adafruit.com/products/592)** for charging the battery.\r\n*   [**External Antenna** - We like this slim sticker-type](https://www.adafruit.com/products/1991), which plugs right in. Alternatively,  [this straight SMA one](https://www.adafruit.com/products/1859) or this [right-angle SMA one will work](https://www.adafruit.com/products/1858) but you'll also need a** [uFL to SMA adapter cable](https://www.adafruit.com/products/851)** so you can connect to your SMA antenna\r\n\r\nThere's also some recommended accessories. They are not required but chances are you'll want them!\r\n\r\n*   [**TRRS 4-Pole Headset** - Any 'iPhone' or 'Android' compatible (but not iPhone original) should work. We tried about 10 different ones, and basically the more expensive once are more comfortable and louder but our official iPhone headset mic did not work.](https://www.adafruit.com/product/1966)\r\n*   **External Mic & Speaker** - If you want to talk directly to your FONA, [an electret mic](https://www.adafruit.com/product/1064) and [mini 8 ohm speaker](https://www.adafruit.com/product/1890) will do quite nicely.\r\n*   **Vibrating motor** - the FONA can drive this directly, [just solder a mini vibrating motor disc in!](https://www.adafruit.com/product/1201)\r\n*   **USB console cable** - the microUSB connector is for charging [only, but you can wire up a console cable for direct-connection to the module](https://www.adafruit.com/product/954) if you want to send commands from a terminal (great for testing and tweaking)",
                "tecnical_detail": "*   Dimensions w/Components: 45mm x 34mm x 8mm / 1.8\" x 1.3\" x 0.3\"\r\n*   Dimensions of PCB: 45mm x 32mm x 2mm / 1.8\" x 1.3\" x .1\"\r\n*   Weight: 9.0g\r\n\r\n**Revision History:**\r\n\r\n*   As of December 22, 2015 we have replaced the SIM800L module with SIM800H which is backward compatible. Note that this board design does not have a bluetooth antenna on it so you cannot use the BT capabilities of the SIM800H\r\n*   As of December 27, 2016 we are selling a new firmware revision of the module. The library is backwards compatible but we notice that the speaker output is a little quieter.\r\n\r\n**[Datasheets, app notes, PCB CAD files and Fritzing objects available in the tutorial](https://learn.adafruit.com/adafruit-fona-mini-gsm-gprs-cellular-phone-module/downloads)**",
                "price": "160000.00",
                "quantity": 10,
                "featured": false,
                "active": true,
                "timestamp": "2020-09-24T07:25:23.955940Z",
                "updated_at": "2020-09-25T03:03:35.973063Z"
            },
            {
                "id": 2,
                "images": [
                    {
                        "id": 8,
                        "image": "/media/products/2/102035493.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.764862Z",
                        "updated_at": "2020-09-24T07:26:39.764892Z",
                        "product": 2
                    },
                    {
                        "id": 9,
                        "image": "/media/products/2/3846484099.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.770912Z",
                        "updated_at": "2020-09-24T07:26:39.770939Z",
                        "product": 2
                    },
                    {
                        "id": 10,
                        "image": "/media/products/2/2810155380.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.776011Z",
                        "updated_at": "2020-09-24T07:26:39.776032Z",
                        "product": 2
                    }
                ],
                "title": "Adafruit FONA - Mini Cellular GSM Breakout uFL Version",
                "slug": "fona2",
                "description": "Ring, Ring! Who's that callin'? It's your breadboard! Introducing Adafruit FONA MiniGSM, an adorable all-in-one cellular phone module that lets you add voice, text, SMS and data to your project in an adorable little package.\r\n\r\n**Please note: The T-Mobile GSM network is shutting down in the USA over the course of 2020 and beyond, so please be aware these are not for long term usage in the USA! [Please check out the FONA 3G for next-generation usage](https://www.adafruit.com/product/2687).**  \r\n\r\nThis module measures only 1.75\"x1.25\" but packs a surprising amount of technology into its little frame. At the heart is a GSM cellular module (we use the latest SIM800) the size of a postage stamp. This module can do just about everything. [This version has a uFL connector. For the SMA version, click here!](https://www.adafruit.com/products/1963)\r\n\r\n*   Quad-band 850/900/1800/1900MHz - connect onto any global GSM network with any 2G SIM (in the USA, T-Mobile is suggested)\r\n*   Make and receive voice calls using a headset OR an external 8Ω speaker + electret microphone\r\n*   Send and receive SMS messages\r\n*   Send and receive GPRS data (TCP/IP, HTTP, etc.)\r\n*   Scan and receive FM radio broadcasts (yeah, we don't exactly know why this was included but it works really well)\r\n*   PWM/Buzzer vibrational motor control\r\n*   AT command interface with \"auto baud\" detection\r\n\r\nSounds delicious, right? So we plated this fine module onto a little breakout with all the extras you need to make your next project shine:\r\n\r\n*   Onboard LiPoly battery charging circuitry so you can take your project on the go. Use any [500mAh+ LiPoly or LiIon battery](https://www.adafruit.com/search?q=500mah+lithium+ion+polymer+battery) and recharge over the MicroUSB when necessary. Two LEDs let you know when its charging and done\r\n*   Standard 4-pole TRRS headphone jack. Use any 'Android' or 'iPhone'-compatible headset with mic\r\n*   Breakouts for external 8Ω speaker and electret mic if you don't want to use a headphone\r\n*   Level shifting circuitry so you can run it with 2.8V to 5V logic.\r\n*   Vibrational motor (buzzer) driver so you can have noiseless notifications\r\n*   uFL connections for external antenna\r\n*   Indicator LEDs for power and network connectivity\r\n*   Standard SIM slides into the back\r\n\r\nOn its own, this module can't do anything. It requires a microcontroller to drive it! We suggest and use [an Arduino](https://www.adafruit.com/category/17) but any 3-5V microcontroller with a UART can send and receive commands over the RX/TX pins.  \r\n\r\n**You will also need some required accessories to make FONA work. These are not included!**\r\n\r\n*   **SIM Card! [](https://www.adafruit.com/products/2505) **[A 2G Mini SIM card is required to do anything on the cellular network. US AT&T no longer sells 2G SIMs and T-Mobile will shut off their 2G network over the course of 2020.](https://www.adafruit.com/products/2505)\r\n*   **Lipoly Battery** - 500mAh or larger! This [500mAh](https://www.adafruit.com/product/1578) battery, [or this 1200mAh](https://www.adafruit.com/products/258) will work great.\r\n*   **[MicroUSB cable](https://www.adafruit.com/products/592)** for charging the battery.\r\n*   [**External Antenna** - We like this slim sticker-type](https://www.adafruit.com/products/1991), which plugs right in. Alternatively,  [this straight SMA one](https://www.adafruit.com/products/1859) or this [right-angle SMA one will work](https://www.adafruit.com/products/1858) but you'll also need a** [uFL to SMA adapter cable](https://www.adafruit.com/products/851)** so you can connect to your SMA antenna\r\n\r\nThere's also some recommended accessories. They are not required but chances are you'll want them!\r\n\r\n*   [**TRRS 4-Pole Headset** - Any 'iPhone' or 'Android' compatible (but not iPhone original) should work. We tried about 10 different ones, and basically the more expensive once are more comfortable and louder but our official iPhone headset mic did not work.](https://www.adafruit.com/product/1966)\r\n*   **External Mic & Speaker** - If you want to talk directly to your FONA, [an electret mic](https://www.adafruit.com/product/1064) and [mini 8 ohm speaker](https://www.adafruit.com/product/1890) will do quite nicely.\r\n*   **Vibrating motor** - the FONA can drive this directly, [just solder a mini vibrating motor disc in!](https://www.adafruit.com/product/1201)\r\n*   **USB console cable** - the microUSB connector is for charging [only, but you can wire up a console cable for direct-connection to the module](https://www.adafruit.com/product/954) if you want to send commands from a terminal (great for testing and tweaking)",
                "tecnical_detail": "*   Dimensions w/Components: 45mm x 34mm x 8mm / 1.8\" x 1.3\" x 0.3\"\r\n*   Dimensions of PCB: 45mm x 32mm x 2mm / 1.8\" x 1.3\" x .1\"\r\n*   Weight: 9.0g\r\n\r\n**Revision History:**\r\n\r\n*   As of December 22, 2015 we have replaced the SIM800L module with SIM800H which is backward compatible. Note that this board design does not have a bluetooth antenna on it so you cannot use the BT capabilities of the SIM800H\r\n*   As of December 27, 2016 we are selling a new firmware revision of the module. The library is backwards compatible but we notice that the speaker output is a little quieter.\r\n\r\n**[Datasheets, app notes, PCB CAD files and Fritzing objects available in the tutorial](https://learn.adafruit.com/adafruit-fona-mini-gsm-gprs-cellular-phone-module/downloads)**",
                "price": "160000.00",
                "quantity": 10,
                "featured": false,
                "active": true,
                "timestamp": "2020-09-24T07:25:23.955940Z",
                "updated_at": "2020-09-25T03:03:35.973063Z"
            },
            {
                "id": 2,
                "images": [
                    {
                        "id": 8,
                        "image": "/media/products/2/102035493.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.764862Z",
                        "updated_at": "2020-09-24T07:26:39.764892Z",
                        "product": 2
                    },
                    {
                        "id": 9,
                        "image": "/media/products/2/3846484099.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.770912Z",
                        "updated_at": "2020-09-24T07:26:39.770939Z",
                        "product": 2
                    },
                    {
                        "id": 10,
                        "image": "/media/products/2/2810155380.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.776011Z",
                        "updated_at": "2020-09-24T07:26:39.776032Z",
                        "product": 2
                    }
                ],
                "title": "Adafruit FONA - Mini Cellular GSM Breakout uFL Version",
                "slug": "fona3",
                "description": "Ring, Ring! Who's that callin'? It's your breadboard! Introducing Adafruit FONA MiniGSM, an adorable all-in-one cellular phone module that lets you add voice, text, SMS and data to your project in an adorable little package.\r\n\r\n**Please note: The T-Mobile GSM network is shutting down in the USA over the course of 2020 and beyond, so please be aware these are not for long term usage in the USA! [Please check out the FONA 3G for next-generation usage](https://www.adafruit.com/product/2687).**  \r\n\r\nThis module measures only 1.75\"x1.25\" but packs a surprising amount of technology into its little frame. At the heart is a GSM cellular module (we use the latest SIM800) the size of a postage stamp. This module can do just about everything. [This version has a uFL connector. For the SMA version, click here!](https://www.adafruit.com/products/1963)\r\n\r\n*   Quad-band 850/900/1800/1900MHz - connect onto any global GSM network with any 2G SIM (in the USA, T-Mobile is suggested)\r\n*   Make and receive voice calls using a headset OR an external 8Ω speaker + electret microphone\r\n*   Send and receive SMS messages\r\n*   Send and receive GPRS data (TCP/IP, HTTP, etc.)\r\n*   Scan and receive FM radio broadcasts (yeah, we don't exactly know why this was included but it works really well)\r\n*   PWM/Buzzer vibrational motor control\r\n*   AT command interface with \"auto baud\" detection\r\n\r\nSounds delicious, right? So we plated this fine module onto a little breakout with all the extras you need to make your next project shine:\r\n\r\n*   Onboard LiPoly battery charging circuitry so you can take your project on the go. Use any [500mAh+ LiPoly or LiIon battery](https://www.adafruit.com/search?q=500mah+lithium+ion+polymer+battery) and recharge over the MicroUSB when necessary. Two LEDs let you know when its charging and done\r\n*   Standard 4-pole TRRS headphone jack. Use any 'Android' or 'iPhone'-compatible headset with mic\r\n*   Breakouts for external 8Ω speaker and electret mic if you don't want to use a headphone\r\n*   Level shifting circuitry so you can run it with 2.8V to 5V logic.\r\n*   Vibrational motor (buzzer) driver so you can have noiseless notifications\r\n*   uFL connections for external antenna\r\n*   Indicator LEDs for power and network connectivity\r\n*   Standard SIM slides into the back\r\n\r\nOn its own, this module can't do anything. It requires a microcontroller to drive it! We suggest and use [an Arduino](https://www.adafruit.com/category/17) but any 3-5V microcontroller with a UART can send and receive commands over the RX/TX pins.  \r\n\r\n**You will also need some required accessories to make FONA work. These are not included!**\r\n\r\n*   **SIM Card! [](https://www.adafruit.com/products/2505) **[A 2G Mini SIM card is required to do anything on the cellular network. US AT&T no longer sells 2G SIMs and T-Mobile will shut off their 2G network over the course of 2020.](https://www.adafruit.com/products/2505)\r\n*   **Lipoly Battery** - 500mAh or larger! This [500mAh](https://www.adafruit.com/product/1578) battery, [or this 1200mAh](https://www.adafruit.com/products/258) will work great.\r\n*   **[MicroUSB cable](https://www.adafruit.com/products/592)** for charging the battery.\r\n*   [**External Antenna** - We like this slim sticker-type](https://www.adafruit.com/products/1991), which plugs right in. Alternatively,  [this straight SMA one](https://www.adafruit.com/products/1859) or this [right-angle SMA one will work](https://www.adafruit.com/products/1858) but you'll also need a** [uFL to SMA adapter cable](https://www.adafruit.com/products/851)** so you can connect to your SMA antenna\r\n\r\nThere's also some recommended accessories. They are not required but chances are you'll want them!\r\n\r\n*   [**TRRS 4-Pole Headset** - Any 'iPhone' or 'Android' compatible (but not iPhone original) should work. We tried about 10 different ones, and basically the more expensive once are more comfortable and louder but our official iPhone headset mic did not work.](https://www.adafruit.com/product/1966)\r\n*   **External Mic & Speaker** - If you want to talk directly to your FONA, [an electret mic](https://www.adafruit.com/product/1064) and [mini 8 ohm speaker](https://www.adafruit.com/product/1890) will do quite nicely.\r\n*   **Vibrating motor** - the FONA can drive this directly, [just solder a mini vibrating motor disc in!](https://www.adafruit.com/product/1201)\r\n*   **USB console cable** - the microUSB connector is for charging [only, but you can wire up a console cable for direct-connection to the module](https://www.adafruit.com/product/954) if you want to send commands from a terminal (great for testing and tweaking)",
                "tecnical_detail": "*   Dimensions w/Components: 45mm x 34mm x 8mm / 1.8\" x 1.3\" x 0.3\"\r\n*   Dimensions of PCB: 45mm x 32mm x 2mm / 1.8\" x 1.3\" x .1\"\r\n*   Weight: 9.0g\r\n\r\n**Revision History:**\r\n\r\n*   As of December 22, 2015 we have replaced the SIM800L module with SIM800H which is backward compatible. Note that this board design does not have a bluetooth antenna on it so you cannot use the BT capabilities of the SIM800H\r\n*   As of December 27, 2016 we are selling a new firmware revision of the module. The library is backwards compatible but we notice that the speaker output is a little quieter.\r\n\r\n**[Datasheets, app notes, PCB CAD files and Fritzing objects available in the tutorial](https://learn.adafruit.com/adafruit-fona-mini-gsm-gprs-cellular-phone-module/downloads)**",
                "price": "160000.00",
                "quantity": 10,
                "featured": false,
                "active": true,
                "timestamp": "2020-09-24T07:25:23.955940Z",
                "updated_at": "2020-09-25T03:03:35.973063Z"
            },
            {
                "id": 2,
                "images": [
                    {
                        "id": 8,
                        "image": "/media/products/2/102035493.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.764862Z",
                        "updated_at": "2020-09-24T07:26:39.764892Z",
                        "product": 2
                    },
                    {
                        "id": 9,
                        "image": "/media/products/2/3846484099.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.770912Z",
                        "updated_at": "2020-09-24T07:26:39.770939Z",
                        "product": 2
                    },
                    {
                        "id": 10,
                        "image": "/media/products/2/2810155380.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.776011Z",
                        "updated_at": "2020-09-24T07:26:39.776032Z",
                        "product": 2
                    }
                ],
                "title": "Adafruit FONA - Mini Cellular GSM Breakout uFL Version",
                "slug": "fona4",
                "description": "Ring, Ring! Who's that callin'? It's your breadboard! Introducing Adafruit FONA MiniGSM, an adorable all-in-one cellular phone module that lets you add voice, text, SMS and data to your project in an adorable little package.\r\n\r\n**Please note: The T-Mobile GSM network is shutting down in the USA over the course of 2020 and beyond, so please be aware these are not for long term usage in the USA! [Please check out the FONA 3G for next-generation usage](https://www.adafruit.com/product/2687).**  \r\n\r\nThis module measures only 1.75\"x1.25\" but packs a surprising amount of technology into its little frame. At the heart is a GSM cellular module (we use the latest SIM800) the size of a postage stamp. This module can do just about everything. [This version has a uFL connector. For the SMA version, click here!](https://www.adafruit.com/products/1963)\r\n\r\n*   Quad-band 850/900/1800/1900MHz - connect onto any global GSM network with any 2G SIM (in the USA, T-Mobile is suggested)\r\n*   Make and receive voice calls using a headset OR an external 8Ω speaker + electret microphone\r\n*   Send and receive SMS messages\r\n*   Send and receive GPRS data (TCP/IP, HTTP, etc.)\r\n*   Scan and receive FM radio broadcasts (yeah, we don't exactly know why this was included but it works really well)\r\n*   PWM/Buzzer vibrational motor control\r\n*   AT command interface with \"auto baud\" detection\r\n\r\nSounds delicious, right? So we plated this fine module onto a little breakout with all the extras you need to make your next project shine:\r\n\r\n*   Onboard LiPoly battery charging circuitry so you can take your project on the go. Use any [500mAh+ LiPoly or LiIon battery](https://www.adafruit.com/search?q=500mah+lithium+ion+polymer+battery) and recharge over the MicroUSB when necessary. Two LEDs let you know when its charging and done\r\n*   Standard 4-pole TRRS headphone jack. Use any 'Android' or 'iPhone'-compatible headset with mic\r\n*   Breakouts for external 8Ω speaker and electret mic if you don't want to use a headphone\r\n*   Level shifting circuitry so you can run it with 2.8V to 5V logic.\r\n*   Vibrational motor (buzzer) driver so you can have noiseless notifications\r\n*   uFL connections for external antenna\r\n*   Indicator LEDs for power and network connectivity\r\n*   Standard SIM slides into the back\r\n\r\nOn its own, this module can't do anything. It requires a microcontroller to drive it! We suggest and use [an Arduino](https://www.adafruit.com/category/17) but any 3-5V microcontroller with a UART can send and receive commands over the RX/TX pins.  \r\n\r\n**You will also need some required accessories to make FONA work. These are not included!**\r\n\r\n*   **SIM Card! [](https://www.adafruit.com/products/2505) **[A 2G Mini SIM card is required to do anything on the cellular network. US AT&T no longer sells 2G SIMs and T-Mobile will shut off their 2G network over the course of 2020.](https://www.adafruit.com/products/2505)\r\n*   **Lipoly Battery** - 500mAh or larger! This [500mAh](https://www.adafruit.com/product/1578) battery, [or this 1200mAh](https://www.adafruit.com/products/258) will work great.\r\n*   **[MicroUSB cable](https://www.adafruit.com/products/592)** for charging the battery.\r\n*   [**External Antenna** - We like this slim sticker-type](https://www.adafruit.com/products/1991), which plugs right in. Alternatively,  [this straight SMA one](https://www.adafruit.com/products/1859) or this [right-angle SMA one will work](https://www.adafruit.com/products/1858) but you'll also need a** [uFL to SMA adapter cable](https://www.adafruit.com/products/851)** so you can connect to your SMA antenna\r\n\r\nThere's also some recommended accessories. They are not required but chances are you'll want them!\r\n\r\n*   [**TRRS 4-Pole Headset** - Any 'iPhone' or 'Android' compatible (but not iPhone original) should work. We tried about 10 different ones, and basically the more expensive once are more comfortable and louder but our official iPhone headset mic did not work.](https://www.adafruit.com/product/1966)\r\n*   **External Mic & Speaker** - If you want to talk directly to your FONA, [an electret mic](https://www.adafruit.com/product/1064) and [mini 8 ohm speaker](https://www.adafruit.com/product/1890) will do quite nicely.\r\n*   **Vibrating motor** - the FONA can drive this directly, [just solder a mini vibrating motor disc in!](https://www.adafruit.com/product/1201)\r\n*   **USB console cable** - the microUSB connector is for charging [only, but you can wire up a console cable for direct-connection to the module](https://www.adafruit.com/product/954) if you want to send commands from a terminal (great for testing and tweaking)",
                "tecnical_detail": "*   Dimensions w/Components: 45mm x 34mm x 8mm / 1.8\" x 1.3\" x 0.3\"\r\n*   Dimensions of PCB: 45mm x 32mm x 2mm / 1.8\" x 1.3\" x .1\"\r\n*   Weight: 9.0g\r\n\r\n**Revision History:**\r\n\r\n*   As of December 22, 2015 we have replaced the SIM800L module with SIM800H which is backward compatible. Note that this board design does not have a bluetooth antenna on it so you cannot use the BT capabilities of the SIM800H\r\n*   As of December 27, 2016 we are selling a new firmware revision of the module. The library is backwards compatible but we notice that the speaker output is a little quieter.\r\n\r\n**[Datasheets, app notes, PCB CAD files and Fritzing objects available in the tutorial](https://learn.adafruit.com/adafruit-fona-mini-gsm-gprs-cellular-phone-module/downloads)**",
                "price": "160000.00",
                "quantity": 10,
                "featured": false,
                "active": true,
                "timestamp": "2020-09-24T07:25:23.955940Z",
                "updated_at": "2020-09-25T03:03:35.973063Z"
            },
            {
                "id": 2,
                "images": [
                    {
                        "id": 8,
                        "image": "/media/products/2/102035493.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.764862Z",
                        "updated_at": "2020-09-24T07:26:39.764892Z",
                        "product": 2
                    },
                    {
                        "id": 9,
                        "image": "/media/products/2/3846484099.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.770912Z",
                        "updated_at": "2020-09-24T07:26:39.770939Z",
                        "product": 2
                    },
                    {
                        "id": 10,
                        "image": "/media/products/2/2810155380.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.776011Z",
                        "updated_at": "2020-09-24T07:26:39.776032Z",
                        "product": 2
                    }
                ],
                "title": "Adafruit FONA - Mini Cellular GSM Breakout uFL Version",
                "slug": "fona5",
                "description": "Ring, Ring! Who's that callin'? It's your breadboard! Introducing Adafruit FONA MiniGSM, an adorable all-in-one cellular phone module that lets you add voice, text, SMS and data to your project in an adorable little package.\r\n\r\n**Please note: The T-Mobile GSM network is shutting down in the USA over the course of 2020 and beyond, so please be aware these are not for long term usage in the USA! [Please check out the FONA 3G for next-generation usage](https://www.adafruit.com/product/2687).**  \r\n\r\nThis module measures only 1.75\"x1.25\" but packs a surprising amount of technology into its little frame. At the heart is a GSM cellular module (we use the latest SIM800) the size of a postage stamp. This module can do just about everything. [This version has a uFL connector. For the SMA version, click here!](https://www.adafruit.com/products/1963)\r\n\r\n*   Quad-band 850/900/1800/1900MHz - connect onto any global GSM network with any 2G SIM (in the USA, T-Mobile is suggested)\r\n*   Make and receive voice calls using a headset OR an external 8Ω speaker + electret microphone\r\n*   Send and receive SMS messages\r\n*   Send and receive GPRS data (TCP/IP, HTTP, etc.)\r\n*   Scan and receive FM radio broadcasts (yeah, we don't exactly know why this was included but it works really well)\r\n*   PWM/Buzzer vibrational motor control\r\n*   AT command interface with \"auto baud\" detection\r\n\r\nSounds delicious, right? So we plated this fine module onto a little breakout with all the extras you need to make your next project shine:\r\n\r\n*   Onboard LiPoly battery charging circuitry so you can take your project on the go. Use any [500mAh+ LiPoly or LiIon battery](https://www.adafruit.com/search?q=500mah+lithium+ion+polymer+battery) and recharge over the MicroUSB when necessary. Two LEDs let you know when its charging and done\r\n*   Standard 4-pole TRRS headphone jack. Use any 'Android' or 'iPhone'-compatible headset with mic\r\n*   Breakouts for external 8Ω speaker and electret mic if you don't want to use a headphone\r\n*   Level shifting circuitry so you can run it with 2.8V to 5V logic.\r\n*   Vibrational motor (buzzer) driver so you can have noiseless notifications\r\n*   uFL connections for external antenna\r\n*   Indicator LEDs for power and network connectivity\r\n*   Standard SIM slides into the back\r\n\r\nOn its own, this module can't do anything. It requires a microcontroller to drive it! We suggest and use [an Arduino](https://www.adafruit.com/category/17) but any 3-5V microcontroller with a UART can send and receive commands over the RX/TX pins.  \r\n\r\n**You will also need some required accessories to make FONA work. These are not included!**\r\n\r\n*   **SIM Card! [](https://www.adafruit.com/products/2505) **[A 2G Mini SIM card is required to do anything on the cellular network. US AT&T no longer sells 2G SIMs and T-Mobile will shut off their 2G network over the course of 2020.](https://www.adafruit.com/products/2505)\r\n*   **Lipoly Battery** - 500mAh or larger! This [500mAh](https://www.adafruit.com/product/1578) battery, [or this 1200mAh](https://www.adafruit.com/products/258) will work great.\r\n*   **[MicroUSB cable](https://www.adafruit.com/products/592)** for charging the battery.\r\n*   [**External Antenna** - We like this slim sticker-type](https://www.adafruit.com/products/1991), which plugs right in. Alternatively,  [this straight SMA one](https://www.adafruit.com/products/1859) or this [right-angle SMA one will work](https://www.adafruit.com/products/1858) but you'll also need a** [uFL to SMA adapter cable](https://www.adafruit.com/products/851)** so you can connect to your SMA antenna\r\n\r\nThere's also some recommended accessories. They are not required but chances are you'll want them!\r\n\r\n*   [**TRRS 4-Pole Headset** - Any 'iPhone' or 'Android' compatible (but not iPhone original) should work. We tried about 10 different ones, and basically the more expensive once are more comfortable and louder but our official iPhone headset mic did not work.](https://www.adafruit.com/product/1966)\r\n*   **External Mic & Speaker** - If you want to talk directly to your FONA, [an electret mic](https://www.adafruit.com/product/1064) and [mini 8 ohm speaker](https://www.adafruit.com/product/1890) will do quite nicely.\r\n*   **Vibrating motor** - the FONA can drive this directly, [just solder a mini vibrating motor disc in!](https://www.adafruit.com/product/1201)\r\n*   **USB console cable** - the microUSB connector is for charging [only, but you can wire up a console cable for direct-connection to the module](https://www.adafruit.com/product/954) if you want to send commands from a terminal (great for testing and tweaking)",
                "tecnical_detail": "*   Dimensions w/Components: 45mm x 34mm x 8mm / 1.8\" x 1.3\" x 0.3\"\r\n*   Dimensions of PCB: 45mm x 32mm x 2mm / 1.8\" x 1.3\" x .1\"\r\n*   Weight: 9.0g\r\n\r\n**Revision History:**\r\n\r\n*   As of December 22, 2015 we have replaced the SIM800L module with SIM800H which is backward compatible. Note that this board design does not have a bluetooth antenna on it so you cannot use the BT capabilities of the SIM800H\r\n*   As of December 27, 2016 we are selling a new firmware revision of the module. The library is backwards compatible but we notice that the speaker output is a little quieter.\r\n\r\n**[Datasheets, app notes, PCB CAD files and Fritzing objects available in the tutorial](https://learn.adafruit.com/adafruit-fona-mini-gsm-gprs-cellular-phone-module/downloads)**",
                "price": "160000.00",
                "quantity": 10,
                "featured": false,
                "active": true,
                "timestamp": "2020-09-24T07:25:23.955940Z",
                "updated_at": "2020-09-25T03:03:35.973063Z"
            },
            {
                "id": 2,
                "images": [
                    {
                        "id": 8,
                        "image": "/media/products/2/102035493.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.764862Z",
                        "updated_at": "2020-09-24T07:26:39.764892Z",
                        "product": 2
                    },
                    {
                        "id": 9,
                        "image": "/media/products/2/3846484099.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.770912Z",
                        "updated_at": "2020-09-24T07:26:39.770939Z",
                        "product": 2
                    },
                    {
                        "id": 10,
                        "image": "/media/products/2/2810155380.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.776011Z",
                        "updated_at": "2020-09-24T07:26:39.776032Z",
                        "product": 2
                    }
                ],
                "title": "Adafruit FONA - Mini Cellular GSM Breakout uFL Version",
                "slug": "fona6",
                "description": "Ring, Ring! Who's that callin'? It's your breadboard! Introducing Adafruit FONA MiniGSM, an adorable all-in-one cellular phone module that lets you add voice, text, SMS and data to your project in an adorable little package.\r\n\r\n**Please note: The T-Mobile GSM network is shutting down in the USA over the course of 2020 and beyond, so please be aware these are not for long term usage in the USA! [Please check out the FONA 3G for next-generation usage](https://www.adafruit.com/product/2687).**  \r\n\r\nThis module measures only 1.75\"x1.25\" but packs a surprising amount of technology into its little frame. At the heart is a GSM cellular module (we use the latest SIM800) the size of a postage stamp. This module can do just about everything. [This version has a uFL connector. For the SMA version, click here!](https://www.adafruit.com/products/1963)\r\n\r\n*   Quad-band 850/900/1800/1900MHz - connect onto any global GSM network with any 2G SIM (in the USA, T-Mobile is suggested)\r\n*   Make and receive voice calls using a headset OR an external 8Ω speaker + electret microphone\r\n*   Send and receive SMS messages\r\n*   Send and receive GPRS data (TCP/IP, HTTP, etc.)\r\n*   Scan and receive FM radio broadcasts (yeah, we don't exactly know why this was included but it works really well)\r\n*   PWM/Buzzer vibrational motor control\r\n*   AT command interface with \"auto baud\" detection\r\n\r\nSounds delicious, right? So we plated this fine module onto a little breakout with all the extras you need to make your next project shine:\r\n\r\n*   Onboard LiPoly battery charging circuitry so you can take your project on the go. Use any [500mAh+ LiPoly or LiIon battery](https://www.adafruit.com/search?q=500mah+lithium+ion+polymer+battery) and recharge over the MicroUSB when necessary. Two LEDs let you know when its charging and done\r\n*   Standard 4-pole TRRS headphone jack. Use any 'Android' or 'iPhone'-compatible headset with mic\r\n*   Breakouts for external 8Ω speaker and electret mic if you don't want to use a headphone\r\n*   Level shifting circuitry so you can run it with 2.8V to 5V logic.\r\n*   Vibrational motor (buzzer) driver so you can have noiseless notifications\r\n*   uFL connections for external antenna\r\n*   Indicator LEDs for power and network connectivity\r\n*   Standard SIM slides into the back\r\n\r\nOn its own, this module can't do anything. It requires a microcontroller to drive it! We suggest and use [an Arduino](https://www.adafruit.com/category/17) but any 3-5V microcontroller with a UART can send and receive commands over the RX/TX pins.  \r\n\r\n**You will also need some required accessories to make FONA work. These are not included!**\r\n\r\n*   **SIM Card! [](https://www.adafruit.com/products/2505) **[A 2G Mini SIM card is required to do anything on the cellular network. US AT&T no longer sells 2G SIMs and T-Mobile will shut off their 2G network over the course of 2020.](https://www.adafruit.com/products/2505)\r\n*   **Lipoly Battery** - 500mAh or larger! This [500mAh](https://www.adafruit.com/product/1578) battery, [or this 1200mAh](https://www.adafruit.com/products/258) will work great.\r\n*   **[MicroUSB cable](https://www.adafruit.com/products/592)** for charging the battery.\r\n*   [**External Antenna** - We like this slim sticker-type](https://www.adafruit.com/products/1991), which plugs right in. Alternatively,  [this straight SMA one](https://www.adafruit.com/products/1859) or this [right-angle SMA one will work](https://www.adafruit.com/products/1858) but you'll also need a** [uFL to SMA adapter cable](https://www.adafruit.com/products/851)** so you can connect to your SMA antenna\r\n\r\nThere's also some recommended accessories. They are not required but chances are you'll want them!\r\n\r\n*   [**TRRS 4-Pole Headset** - Any 'iPhone' or 'Android' compatible (but not iPhone original) should work. We tried about 10 different ones, and basically the more expensive once are more comfortable and louder but our official iPhone headset mic did not work.](https://www.adafruit.com/product/1966)\r\n*   **External Mic & Speaker** - If you want to talk directly to your FONA, [an electret mic](https://www.adafruit.com/product/1064) and [mini 8 ohm speaker](https://www.adafruit.com/product/1890) will do quite nicely.\r\n*   **Vibrating motor** - the FONA can drive this directly, [just solder a mini vibrating motor disc in!](https://www.adafruit.com/product/1201)\r\n*   **USB console cable** - the microUSB connector is for charging [only, but you can wire up a console cable for direct-connection to the module](https://www.adafruit.com/product/954) if you want to send commands from a terminal (great for testing and tweaking)",
                "tecnical_detail": "*   Dimensions w/Components: 45mm x 34mm x 8mm / 1.8\" x 1.3\" x 0.3\"\r\n*   Dimensions of PCB: 45mm x 32mm x 2mm / 1.8\" x 1.3\" x .1\"\r\n*   Weight: 9.0g\r\n\r\n**Revision History:**\r\n\r\n*   As of December 22, 2015 we have replaced the SIM800L module with SIM800H which is backward compatible. Note that this board design does not have a bluetooth antenna on it so you cannot use the BT capabilities of the SIM800H\r\n*   As of December 27, 2016 we are selling a new firmware revision of the module. The library is backwards compatible but we notice that the speaker output is a little quieter.\r\n\r\n**[Datasheets, app notes, PCB CAD files and Fritzing objects available in the tutorial](https://learn.adafruit.com/adafruit-fona-mini-gsm-gprs-cellular-phone-module/downloads)**",
                "price": "160000.00",
                "quantity": 10,
                "featured": false,
                "active": true,
                "timestamp": "2020-09-24T07:25:23.955940Z",
                "updated_at": "2020-09-25T03:03:35.973063Z"
            }
        ],
        'parent':'',
        'created_at':'',
        'updated_at':'',
    },
    {
        'id':2,
        'name':'raspberry',
        'description':'',
        'products':[
            {
                "id": 2,
                "images": [
                    {
                        "id": 8,
                        "image": "/media/products/2/102035493.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.764862Z",
                        "updated_at": "2020-09-24T07:26:39.764892Z",
                        "product": 2
                    },
                    {
                        "id": 9,
                        "image": "/media/products/2/3846484099.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.770912Z",
                        "updated_at": "2020-09-24T07:26:39.770939Z",
                        "product": 2
                    },
                    {
                        "id": 10,
                        "image": "/media/products/2/2810155380.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.776011Z",
                        "updated_at": "2020-09-24T07:26:39.776032Z",
                        "product": 2
                    }
                ],
                "title": "Adafruit FONA - Mini Cellular GSM Breakout uFL Version",
                "slug": "fona",
                "description": "Ring, Ring! Who's that callin'? It's your breadboard! Introducing Adafruit FONA MiniGSM, an adorable all-in-one cellular phone module that lets you add voice, text, SMS and data to your project in an adorable little package.\r\n\r\n**Please note: The T-Mobile GSM network is shutting down in the USA over the course of 2020 and beyond, so please be aware these are not for long term usage in the USA! [Please check out the FONA 3G for next-generation usage](https://www.adafruit.com/product/2687).**  \r\n\r\nThis module measures only 1.75\"x1.25\" but packs a surprising amount of technology into its little frame. At the heart is a GSM cellular module (we use the latest SIM800) the size of a postage stamp. This module can do just about everything. [This version has a uFL connector. For the SMA version, click here!](https://www.adafruit.com/products/1963)\r\n\r\n*   Quad-band 850/900/1800/1900MHz - connect onto any global GSM network with any 2G SIM (in the USA, T-Mobile is suggested)\r\n*   Make and receive voice calls using a headset OR an external 8Ω speaker + electret microphone\r\n*   Send and receive SMS messages\r\n*   Send and receive GPRS data (TCP/IP, HTTP, etc.)\r\n*   Scan and receive FM radio broadcasts (yeah, we don't exactly know why this was included but it works really well)\r\n*   PWM/Buzzer vibrational motor control\r\n*   AT command interface with \"auto baud\" detection\r\n\r\nSounds delicious, right? So we plated this fine module onto a little breakout with all the extras you need to make your next project shine:\r\n\r\n*   Onboard LiPoly battery charging circuitry so you can take your project on the go. Use any [500mAh+ LiPoly or LiIon battery](https://www.adafruit.com/search?q=500mah+lithium+ion+polymer+battery) and recharge over the MicroUSB when necessary. Two LEDs let you know when its charging and done\r\n*   Standard 4-pole TRRS headphone jack. Use any 'Android' or 'iPhone'-compatible headset with mic\r\n*   Breakouts for external 8Ω speaker and electret mic if you don't want to use a headphone\r\n*   Level shifting circuitry so you can run it with 2.8V to 5V logic.\r\n*   Vibrational motor (buzzer) driver so you can have noiseless notifications\r\n*   uFL connections for external antenna\r\n*   Indicator LEDs for power and network connectivity\r\n*   Standard SIM slides into the back\r\n\r\nOn its own, this module can't do anything. It requires a microcontroller to drive it! We suggest and use [an Arduino](https://www.adafruit.com/category/17) but any 3-5V microcontroller with a UART can send and receive commands over the RX/TX pins.  \r\n\r\n**You will also need some required accessories to make FONA work. These are not included!**\r\n\r\n*   **SIM Card! [](https://www.adafruit.com/products/2505) **[A 2G Mini SIM card is required to do anything on the cellular network. US AT&T no longer sells 2G SIMs and T-Mobile will shut off their 2G network over the course of 2020.](https://www.adafruit.com/products/2505)\r\n*   **Lipoly Battery** - 500mAh or larger! This [500mAh](https://www.adafruit.com/product/1578) battery, [or this 1200mAh](https://www.adafruit.com/products/258) will work great.\r\n*   **[MicroUSB cable](https://www.adafruit.com/products/592)** for charging the battery.\r\n*   [**External Antenna** - We like this slim sticker-type](https://www.adafruit.com/products/1991), which plugs right in. Alternatively,  [this straight SMA one](https://www.adafruit.com/products/1859) or this [right-angle SMA one will work](https://www.adafruit.com/products/1858) but you'll also need a** [uFL to SMA adapter cable](https://www.adafruit.com/products/851)** so you can connect to your SMA antenna\r\n\r\nThere's also some recommended accessories. They are not required but chances are you'll want them!\r\n\r\n*   [**TRRS 4-Pole Headset** - Any 'iPhone' or 'Android' compatible (but not iPhone original) should work. We tried about 10 different ones, and basically the more expensive once are more comfortable and louder but our official iPhone headset mic did not work.](https://www.adafruit.com/product/1966)\r\n*   **External Mic & Speaker** - If you want to talk directly to your FONA, [an electret mic](https://www.adafruit.com/product/1064) and [mini 8 ohm speaker](https://www.adafruit.com/product/1890) will do quite nicely.\r\n*   **Vibrating motor** - the FONA can drive this directly, [just solder a mini vibrating motor disc in!](https://www.adafruit.com/product/1201)\r\n*   **USB console cable** - the microUSB connector is for charging [only, but you can wire up a console cable for direct-connection to the module](https://www.adafruit.com/product/954) if you want to send commands from a terminal (great for testing and tweaking)",
                "tecnical_detail": "*   Dimensions w/Components: 45mm x 34mm x 8mm / 1.8\" x 1.3\" x 0.3\"\r\n*   Dimensions of PCB: 45mm x 32mm x 2mm / 1.8\" x 1.3\" x .1\"\r\n*   Weight: 9.0g\r\n\r\n**Revision History:**\r\n\r\n*   As of December 22, 2015 we have replaced the SIM800L module with SIM800H which is backward compatible. Note that this board design does not have a bluetooth antenna on it so you cannot use the BT capabilities of the SIM800H\r\n*   As of December 27, 2016 we are selling a new firmware revision of the module. The library is backwards compatible but we notice that the speaker output is a little quieter.\r\n\r\n**[Datasheets, app notes, PCB CAD files and Fritzing objects available in the tutorial](https://learn.adafruit.com/adafruit-fona-mini-gsm-gprs-cellular-phone-module/downloads)**",
                "price": "160000.00",
                "quantity": 10,
                "featured": false,
                "active": true,
                "timestamp": "2020-09-24T07:25:23.955940Z",
                "updated_at": "2020-09-25T03:03:35.973063Z"
            },
            {
                "id": 2,
                "images": [
                    {
                        "id": 8,
                        "image": "/media/products/2/102035493.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.764862Z",
                        "updated_at": "2020-09-24T07:26:39.764892Z",
                        "product": 2
                    },
                    {
                        "id": 9,
                        "image": "/media/products/2/3846484099.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.770912Z",
                        "updated_at": "2020-09-24T07:26:39.770939Z",
                        "product": 2
                    },
                    {
                        "id": 10,
                        "image": "/media/products/2/2810155380.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.776011Z",
                        "updated_at": "2020-09-24T07:26:39.776032Z",
                        "product": 2
                    }
                ],
                "title": "Adafruit FONA - Mini Cellular GSM Breakout uFL Version",
                "slug": "fona",
                "description": "Ring, Ring! Who's that callin'? It's your breadboard! Introducing Adafruit FONA MiniGSM, an adorable all-in-one cellular phone module that lets you add voice, text, SMS and data to your project in an adorable little package.\r\n\r\n**Please note: The T-Mobile GSM network is shutting down in the USA over the course of 2020 and beyond, so please be aware these are not for long term usage in the USA! [Please check out the FONA 3G for next-generation usage](https://www.adafruit.com/product/2687).**  \r\n\r\nThis module measures only 1.75\"x1.25\" but packs a surprising amount of technology into its little frame. At the heart is a GSM cellular module (we use the latest SIM800) the size of a postage stamp. This module can do just about everything. [This version has a uFL connector. For the SMA version, click here!](https://www.adafruit.com/products/1963)\r\n\r\n*   Quad-band 850/900/1800/1900MHz - connect onto any global GSM network with any 2G SIM (in the USA, T-Mobile is suggested)\r\n*   Make and receive voice calls using a headset OR an external 8Ω speaker + electret microphone\r\n*   Send and receive SMS messages\r\n*   Send and receive GPRS data (TCP/IP, HTTP, etc.)\r\n*   Scan and receive FM radio broadcasts (yeah, we don't exactly know why this was included but it works really well)\r\n*   PWM/Buzzer vibrational motor control\r\n*   AT command interface with \"auto baud\" detection\r\n\r\nSounds delicious, right? So we plated this fine module onto a little breakout with all the extras you need to make your next project shine:\r\n\r\n*   Onboard LiPoly battery charging circuitry so you can take your project on the go. Use any [500mAh+ LiPoly or LiIon battery](https://www.adafruit.com/search?q=500mah+lithium+ion+polymer+battery) and recharge over the MicroUSB when necessary. Two LEDs let you know when its charging and done\r\n*   Standard 4-pole TRRS headphone jack. Use any 'Android' or 'iPhone'-compatible headset with mic\r\n*   Breakouts for external 8Ω speaker and electret mic if you don't want to use a headphone\r\n*   Level shifting circuitry so you can run it with 2.8V to 5V logic.\r\n*   Vibrational motor (buzzer) driver so you can have noiseless notifications\r\n*   uFL connections for external antenna\r\n*   Indicator LEDs for power and network connectivity\r\n*   Standard SIM slides into the back\r\n\r\nOn its own, this module can't do anything. It requires a microcontroller to drive it! We suggest and use [an Arduino](https://www.adafruit.com/category/17) but any 3-5V microcontroller with a UART can send and receive commands over the RX/TX pins.  \r\n\r\n**You will also need some required accessories to make FONA work. These are not included!**\r\n\r\n*   **SIM Card! [](https://www.adafruit.com/products/2505) **[A 2G Mini SIM card is required to do anything on the cellular network. US AT&T no longer sells 2G SIMs and T-Mobile will shut off their 2G network over the course of 2020.](https://www.adafruit.com/products/2505)\r\n*   **Lipoly Battery** - 500mAh or larger! This [500mAh](https://www.adafruit.com/product/1578) battery, [or this 1200mAh](https://www.adafruit.com/products/258) will work great.\r\n*   **[MicroUSB cable](https://www.adafruit.com/products/592)** for charging the battery.\r\n*   [**External Antenna** - We like this slim sticker-type](https://www.adafruit.com/products/1991), which plugs right in. Alternatively,  [this straight SMA one](https://www.adafruit.com/products/1859) or this [right-angle SMA one will work](https://www.adafruit.com/products/1858) but you'll also need a** [uFL to SMA adapter cable](https://www.adafruit.com/products/851)** so you can connect to your SMA antenna\r\n\r\nThere's also some recommended accessories. They are not required but chances are you'll want them!\r\n\r\n*   [**TRRS 4-Pole Headset** - Any 'iPhone' or 'Android' compatible (but not iPhone original) should work. We tried about 10 different ones, and basically the more expensive once are more comfortable and louder but our official iPhone headset mic did not work.](https://www.adafruit.com/product/1966)\r\n*   **External Mic & Speaker** - If you want to talk directly to your FONA, [an electret mic](https://www.adafruit.com/product/1064) and [mini 8 ohm speaker](https://www.adafruit.com/product/1890) will do quite nicely.\r\n*   **Vibrating motor** - the FONA can drive this directly, [just solder a mini vibrating motor disc in!](https://www.adafruit.com/product/1201)\r\n*   **USB console cable** - the microUSB connector is for charging [only, but you can wire up a console cable for direct-connection to the module](https://www.adafruit.com/product/954) if you want to send commands from a terminal (great for testing and tweaking)",
                "tecnical_detail": "*   Dimensions w/Components: 45mm x 34mm x 8mm / 1.8\" x 1.3\" x 0.3\"\r\n*   Dimensions of PCB: 45mm x 32mm x 2mm / 1.8\" x 1.3\" x .1\"\r\n*   Weight: 9.0g\r\n\r\n**Revision History:**\r\n\r\n*   As of December 22, 2015 we have replaced the SIM800L module with SIM800H which is backward compatible. Note that this board design does not have a bluetooth antenna on it so you cannot use the BT capabilities of the SIM800H\r\n*   As of December 27, 2016 we are selling a new firmware revision of the module. The library is backwards compatible but we notice that the speaker output is a little quieter.\r\n\r\n**[Datasheets, app notes, PCB CAD files and Fritzing objects available in the tutorial](https://learn.adafruit.com/adafruit-fona-mini-gsm-gprs-cellular-phone-module/downloads)**",
                "price": "160000.00",
                "quantity": 10,
                "featured": false,
                "active": true,
                "timestamp": "2020-09-24T07:25:23.955940Z",
                "updated_at": "2020-09-25T03:03:35.973063Z"
            },
            {
                "id": 2,
                "images": [
                    {
                        "id": 8,
                        "image": "/media/products/2/102035493.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.764862Z",
                        "updated_at": "2020-09-24T07:26:39.764892Z",
                        "product": 2
                    },
                    {
                        "id": 9,
                        "image": "/media/products/2/3846484099.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.770912Z",
                        "updated_at": "2020-09-24T07:26:39.770939Z",
                        "product": 2
                    },
                    {
                        "id": 10,
                        "image": "/media/products/2/2810155380.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.776011Z",
                        "updated_at": "2020-09-24T07:26:39.776032Z",
                        "product": 2
                    }
                ],
                "title": "Adafruit FONA - Mini Cellular GSM Breakout uFL Version",
                "slug": "fona",
                "description": "Ring, Ring! Who's that callin'? It's your breadboard! Introducing Adafruit FONA MiniGSM, an adorable all-in-one cellular phone module that lets you add voice, text, SMS and data to your project in an adorable little package.\r\n\r\n**Please note: The T-Mobile GSM network is shutting down in the USA over the course of 2020 and beyond, so please be aware these are not for long term usage in the USA! [Please check out the FONA 3G for next-generation usage](https://www.adafruit.com/product/2687).**  \r\n\r\nThis module measures only 1.75\"x1.25\" but packs a surprising amount of technology into its little frame. At the heart is a GSM cellular module (we use the latest SIM800) the size of a postage stamp. This module can do just about everything. [This version has a uFL connector. For the SMA version, click here!](https://www.adafruit.com/products/1963)\r\n\r\n*   Quad-band 850/900/1800/1900MHz - connect onto any global GSM network with any 2G SIM (in the USA, T-Mobile is suggested)\r\n*   Make and receive voice calls using a headset OR an external 8Ω speaker + electret microphone\r\n*   Send and receive SMS messages\r\n*   Send and receive GPRS data (TCP/IP, HTTP, etc.)\r\n*   Scan and receive FM radio broadcasts (yeah, we don't exactly know why this was included but it works really well)\r\n*   PWM/Buzzer vibrational motor control\r\n*   AT command interface with \"auto baud\" detection\r\n\r\nSounds delicious, right? So we plated this fine module onto a little breakout with all the extras you need to make your next project shine:\r\n\r\n*   Onboard LiPoly battery charging circuitry so you can take your project on the go. Use any [500mAh+ LiPoly or LiIon battery](https://www.adafruit.com/search?q=500mah+lithium+ion+polymer+battery) and recharge over the MicroUSB when necessary. Two LEDs let you know when its charging and done\r\n*   Standard 4-pole TRRS headphone jack. Use any 'Android' or 'iPhone'-compatible headset with mic\r\n*   Breakouts for external 8Ω speaker and electret mic if you don't want to use a headphone\r\n*   Level shifting circuitry so you can run it with 2.8V to 5V logic.\r\n*   Vibrational motor (buzzer) driver so you can have noiseless notifications\r\n*   uFL connections for external antenna\r\n*   Indicator LEDs for power and network connectivity\r\n*   Standard SIM slides into the back\r\n\r\nOn its own, this module can't do anything. It requires a microcontroller to drive it! We suggest and use [an Arduino](https://www.adafruit.com/category/17) but any 3-5V microcontroller with a UART can send and receive commands over the RX/TX pins.  \r\n\r\n**You will also need some required accessories to make FONA work. These are not included!**\r\n\r\n*   **SIM Card! [](https://www.adafruit.com/products/2505) **[A 2G Mini SIM card is required to do anything on the cellular network. US AT&T no longer sells 2G SIMs and T-Mobile will shut off their 2G network over the course of 2020.](https://www.adafruit.com/products/2505)\r\n*   **Lipoly Battery** - 500mAh or larger! This [500mAh](https://www.adafruit.com/product/1578) battery, [or this 1200mAh](https://www.adafruit.com/products/258) will work great.\r\n*   **[MicroUSB cable](https://www.adafruit.com/products/592)** for charging the battery.\r\n*   [**External Antenna** - We like this slim sticker-type](https://www.adafruit.com/products/1991), which plugs right in. Alternatively,  [this straight SMA one](https://www.adafruit.com/products/1859) or this [right-angle SMA one will work](https://www.adafruit.com/products/1858) but you'll also need a** [uFL to SMA adapter cable](https://www.adafruit.com/products/851)** so you can connect to your SMA antenna\r\n\r\nThere's also some recommended accessories. They are not required but chances are you'll want them!\r\n\r\n*   [**TRRS 4-Pole Headset** - Any 'iPhone' or 'Android' compatible (but not iPhone original) should work. We tried about 10 different ones, and basically the more expensive once are more comfortable and louder but our official iPhone headset mic did not work.](https://www.adafruit.com/product/1966)\r\n*   **External Mic & Speaker** - If you want to talk directly to your FONA, [an electret mic](https://www.adafruit.com/product/1064) and [mini 8 ohm speaker](https://www.adafruit.com/product/1890) will do quite nicely.\r\n*   **Vibrating motor** - the FONA can drive this directly, [just solder a mini vibrating motor disc in!](https://www.adafruit.com/product/1201)\r\n*   **USB console cable** - the microUSB connector is for charging [only, but you can wire up a console cable for direct-connection to the module](https://www.adafruit.com/product/954) if you want to send commands from a terminal (great for testing and tweaking)",
                "tecnical_detail": "*   Dimensions w/Components: 45mm x 34mm x 8mm / 1.8\" x 1.3\" x 0.3\"\r\n*   Dimensions of PCB: 45mm x 32mm x 2mm / 1.8\" x 1.3\" x .1\"\r\n*   Weight: 9.0g\r\n\r\n**Revision History:**\r\n\r\n*   As of December 22, 2015 we have replaced the SIM800L module with SIM800H which is backward compatible. Note that this board design does not have a bluetooth antenna on it so you cannot use the BT capabilities of the SIM800H\r\n*   As of December 27, 2016 we are selling a new firmware revision of the module. The library is backwards compatible but we notice that the speaker output is a little quieter.\r\n\r\n**[Datasheets, app notes, PCB CAD files and Fritzing objects available in the tutorial](https://learn.adafruit.com/adafruit-fona-mini-gsm-gprs-cellular-phone-module/downloads)**",
                "price": "160000.00",
                "quantity": 10,
                "featured": false,
                "active": true,
                "timestamp": "2020-09-24T07:25:23.955940Z",
                "updated_at": "2020-09-25T03:03:35.973063Z"
            }
        ],
        'parent':'',
        'created_at':'',
        'updated_at':'',
    },
    {
        'id':3,
        'name':'Adafruit',
        'description':'',
        'products':[
            {
                "id": 2,
                "images": [
                    {
                        "id": 8,
                        "image": "/media/products/2/102035493.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.764862Z",
                        "updated_at": "2020-09-24T07:26:39.764892Z",
                        "product": 2
                    },
                    {
                        "id": 9,
                        "image": "/media/products/2/3846484099.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.770912Z",
                        "updated_at": "2020-09-24T07:26:39.770939Z",
                        "product": 2
                    },
                    {
                        "id": 10,
                        "image": "/media/products/2/2810155380.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.776011Z",
                        "updated_at": "2020-09-24T07:26:39.776032Z",
                        "product": 2
                    }
                ],
                "title": "Adafruit FONA - Mini Cellular GSM Breakout uFL Version",
                "slug": "fona",
                "description": "Ring, Ring! Who's that callin'? It's your breadboard! Introducing Adafruit FONA MiniGSM, an adorable all-in-one cellular phone module that lets you add voice, text, SMS and data to your project in an adorable little package.\r\n\r\n**Please note: The T-Mobile GSM network is shutting down in the USA over the course of 2020 and beyond, so please be aware these are not for long term usage in the USA! [Please check out the FONA 3G for next-generation usage](https://www.adafruit.com/product/2687).**  \r\n\r\nThis module measures only 1.75\"x1.25\" but packs a surprising amount of technology into its little frame. At the heart is a GSM cellular module (we use the latest SIM800) the size of a postage stamp. This module can do just about everything. [This version has a uFL connector. For the SMA version, click here!](https://www.adafruit.com/products/1963)\r\n\r\n*   Quad-band 850/900/1800/1900MHz - connect onto any global GSM network with any 2G SIM (in the USA, T-Mobile is suggested)\r\n*   Make and receive voice calls using a headset OR an external 8Ω speaker + electret microphone\r\n*   Send and receive SMS messages\r\n*   Send and receive GPRS data (TCP/IP, HTTP, etc.)\r\n*   Scan and receive FM radio broadcasts (yeah, we don't exactly know why this was included but it works really well)\r\n*   PWM/Buzzer vibrational motor control\r\n*   AT command interface with \"auto baud\" detection\r\n\r\nSounds delicious, right? So we plated this fine module onto a little breakout with all the extras you need to make your next project shine:\r\n\r\n*   Onboard LiPoly battery charging circuitry so you can take your project on the go. Use any [500mAh+ LiPoly or LiIon battery](https://www.adafruit.com/search?q=500mah+lithium+ion+polymer+battery) and recharge over the MicroUSB when necessary. Two LEDs let you know when its charging and done\r\n*   Standard 4-pole TRRS headphone jack. Use any 'Android' or 'iPhone'-compatible headset with mic\r\n*   Breakouts for external 8Ω speaker and electret mic if you don't want to use a headphone\r\n*   Level shifting circuitry so you can run it with 2.8V to 5V logic.\r\n*   Vibrational motor (buzzer) driver so you can have noiseless notifications\r\n*   uFL connections for external antenna\r\n*   Indicator LEDs for power and network connectivity\r\n*   Standard SIM slides into the back\r\n\r\nOn its own, this module can't do anything. It requires a microcontroller to drive it! We suggest and use [an Arduino](https://www.adafruit.com/category/17) but any 3-5V microcontroller with a UART can send and receive commands over the RX/TX pins.  \r\n\r\n**You will also need some required accessories to make FONA work. These are not included!**\r\n\r\n*   **SIM Card! [](https://www.adafruit.com/products/2505) **[A 2G Mini SIM card is required to do anything on the cellular network. US AT&T no longer sells 2G SIMs and T-Mobile will shut off their 2G network over the course of 2020.](https://www.adafruit.com/products/2505)\r\n*   **Lipoly Battery** - 500mAh or larger! This [500mAh](https://www.adafruit.com/product/1578) battery, [or this 1200mAh](https://www.adafruit.com/products/258) will work great.\r\n*   **[MicroUSB cable](https://www.adafruit.com/products/592)** for charging the battery.\r\n*   [**External Antenna** - We like this slim sticker-type](https://www.adafruit.com/products/1991), which plugs right in. Alternatively,  [this straight SMA one](https://www.adafruit.com/products/1859) or this [right-angle SMA one will work](https://www.adafruit.com/products/1858) but you'll also need a** [uFL to SMA adapter cable](https://www.adafruit.com/products/851)** so you can connect to your SMA antenna\r\n\r\nThere's also some recommended accessories. They are not required but chances are you'll want them!\r\n\r\n*   [**TRRS 4-Pole Headset** - Any 'iPhone' or 'Android' compatible (but not iPhone original) should work. We tried about 10 different ones, and basically the more expensive once are more comfortable and louder but our official iPhone headset mic did not work.](https://www.adafruit.com/product/1966)\r\n*   **External Mic & Speaker** - If you want to talk directly to your FONA, [an electret mic](https://www.adafruit.com/product/1064) and [mini 8 ohm speaker](https://www.adafruit.com/product/1890) will do quite nicely.\r\n*   **Vibrating motor** - the FONA can drive this directly, [just solder a mini vibrating motor disc in!](https://www.adafruit.com/product/1201)\r\n*   **USB console cable** - the microUSB connector is for charging [only, but you can wire up a console cable for direct-connection to the module](https://www.adafruit.com/product/954) if you want to send commands from a terminal (great for testing and tweaking)",
                "tecnical_detail": "*   Dimensions w/Components: 45mm x 34mm x 8mm / 1.8\" x 1.3\" x 0.3\"\r\n*   Dimensions of PCB: 45mm x 32mm x 2mm / 1.8\" x 1.3\" x .1\"\r\n*   Weight: 9.0g\r\n\r\n**Revision History:**\r\n\r\n*   As of December 22, 2015 we have replaced the SIM800L module with SIM800H which is backward compatible. Note that this board design does not have a bluetooth antenna on it so you cannot use the BT capabilities of the SIM800H\r\n*   As of December 27, 2016 we are selling a new firmware revision of the module. The library is backwards compatible but we notice that the speaker output is a little quieter.\r\n\r\n**[Datasheets, app notes, PCB CAD files and Fritzing objects available in the tutorial](https://learn.adafruit.com/adafruit-fona-mini-gsm-gprs-cellular-phone-module/downloads)**",
                "price": "160000.00",
                "quantity": 10,
                "featured": false,
                "active": true,
                "timestamp": "2020-09-24T07:25:23.955940Z",
                "updated_at": "2020-09-25T03:03:35.973063Z"
            },
            {
                "id": 2,
                "images": [
                    {
                        "id": 8,
                        "image": "/media/products/2/102035493.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.764862Z",
                        "updated_at": "2020-09-24T07:26:39.764892Z",
                        "product": 2
                    },
                    {
                        "id": 9,
                        "image": "/media/products/2/3846484099.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.770912Z",
                        "updated_at": "2020-09-24T07:26:39.770939Z",
                        "product": 2
                    },
                    {
                        "id": 10,
                        "image": "/media/products/2/2810155380.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.776011Z",
                        "updated_at": "2020-09-24T07:26:39.776032Z",
                        "product": 2
                    }
                ],
                "title": "Adafruit FONA - Mini Cellular GSM Breakout uFL Version",
                "slug": "fona",
                "description": "Ring, Ring! Who's that callin'? It's your breadboard! Introducing Adafruit FONA MiniGSM, an adorable all-in-one cellular phone module that lets you add voice, text, SMS and data to your project in an adorable little package.\r\n\r\n**Please note: The T-Mobile GSM network is shutting down in the USA over the course of 2020 and beyond, so please be aware these are not for long term usage in the USA! [Please check out the FONA 3G for next-generation usage](https://www.adafruit.com/product/2687).**  \r\n\r\nThis module measures only 1.75\"x1.25\" but packs a surprising amount of technology into its little frame. At the heart is a GSM cellular module (we use the latest SIM800) the size of a postage stamp. This module can do just about everything. [This version has a uFL connector. For the SMA version, click here!](https://www.adafruit.com/products/1963)\r\n\r\n*   Quad-band 850/900/1800/1900MHz - connect onto any global GSM network with any 2G SIM (in the USA, T-Mobile is suggested)\r\n*   Make and receive voice calls using a headset OR an external 8Ω speaker + electret microphone\r\n*   Send and receive SMS messages\r\n*   Send and receive GPRS data (TCP/IP, HTTP, etc.)\r\n*   Scan and receive FM radio broadcasts (yeah, we don't exactly know why this was included but it works really well)\r\n*   PWM/Buzzer vibrational motor control\r\n*   AT command interface with \"auto baud\" detection\r\n\r\nSounds delicious, right? So we plated this fine module onto a little breakout with all the extras you need to make your next project shine:\r\n\r\n*   Onboard LiPoly battery charging circuitry so you can take your project on the go. Use any [500mAh+ LiPoly or LiIon battery](https://www.adafruit.com/search?q=500mah+lithium+ion+polymer+battery) and recharge over the MicroUSB when necessary. Two LEDs let you know when its charging and done\r\n*   Standard 4-pole TRRS headphone jack. Use any 'Android' or 'iPhone'-compatible headset with mic\r\n*   Breakouts for external 8Ω speaker and electret mic if you don't want to use a headphone\r\n*   Level shifting circuitry so you can run it with 2.8V to 5V logic.\r\n*   Vibrational motor (buzzer) driver so you can have noiseless notifications\r\n*   uFL connections for external antenna\r\n*   Indicator LEDs for power and network connectivity\r\n*   Standard SIM slides into the back\r\n\r\nOn its own, this module can't do anything. It requires a microcontroller to drive it! We suggest and use [an Arduino](https://www.adafruit.com/category/17) but any 3-5V microcontroller with a UART can send and receive commands over the RX/TX pins.  \r\n\r\n**You will also need some required accessories to make FONA work. These are not included!**\r\n\r\n*   **SIM Card! [](https://www.adafruit.com/products/2505) **[A 2G Mini SIM card is required to do anything on the cellular network. US AT&T no longer sells 2G SIMs and T-Mobile will shut off their 2G network over the course of 2020.](https://www.adafruit.com/products/2505)\r\n*   **Lipoly Battery** - 500mAh or larger! This [500mAh](https://www.adafruit.com/product/1578) battery, [or this 1200mAh](https://www.adafruit.com/products/258) will work great.\r\n*   **[MicroUSB cable](https://www.adafruit.com/products/592)** for charging the battery.\r\n*   [**External Antenna** - We like this slim sticker-type](https://www.adafruit.com/products/1991), which plugs right in. Alternatively,  [this straight SMA one](https://www.adafruit.com/products/1859) or this [right-angle SMA one will work](https://www.adafruit.com/products/1858) but you'll also need a** [uFL to SMA adapter cable](https://www.adafruit.com/products/851)** so you can connect to your SMA antenna\r\n\r\nThere's also some recommended accessories. They are not required but chances are you'll want them!\r\n\r\n*   [**TRRS 4-Pole Headset** - Any 'iPhone' or 'Android' compatible (but not iPhone original) should work. We tried about 10 different ones, and basically the more expensive once are more comfortable and louder but our official iPhone headset mic did not work.](https://www.adafruit.com/product/1966)\r\n*   **External Mic & Speaker** - If you want to talk directly to your FONA, [an electret mic](https://www.adafruit.com/product/1064) and [mini 8 ohm speaker](https://www.adafruit.com/product/1890) will do quite nicely.\r\n*   **Vibrating motor** - the FONA can drive this directly, [just solder a mini vibrating motor disc in!](https://www.adafruit.com/product/1201)\r\n*   **USB console cable** - the microUSB connector is for charging [only, but you can wire up a console cable for direct-connection to the module](https://www.adafruit.com/product/954) if you want to send commands from a terminal (great for testing and tweaking)",
                "tecnical_detail": "*   Dimensions w/Components: 45mm x 34mm x 8mm / 1.8\" x 1.3\" x 0.3\"\r\n*   Dimensions of PCB: 45mm x 32mm x 2mm / 1.8\" x 1.3\" x .1\"\r\n*   Weight: 9.0g\r\n\r\n**Revision History:**\r\n\r\n*   As of December 22, 2015 we have replaced the SIM800L module with SIM800H which is backward compatible. Note that this board design does not have a bluetooth antenna on it so you cannot use the BT capabilities of the SIM800H\r\n*   As of December 27, 2016 we are selling a new firmware revision of the module. The library is backwards compatible but we notice that the speaker output is a little quieter.\r\n\r\n**[Datasheets, app notes, PCB CAD files and Fritzing objects available in the tutorial](https://learn.adafruit.com/adafruit-fona-mini-gsm-gprs-cellular-phone-module/downloads)**",
                "price": "160000.00",
                "quantity": 10,
                "featured": false,
                "active": true,
                "timestamp": "2020-09-24T07:25:23.955940Z",
                "updated_at": "2020-09-25T03:03:35.973063Z"
            },
            {
                "id": 2,
                "images": [
                    {
                        "id": 8,
                        "image": "/media/products/2/102035493.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.764862Z",
                        "updated_at": "2020-09-24T07:26:39.764892Z",
                        "product": 2
                    },
                    {
                        "id": 9,
                        "image": "/media/products/2/3846484099.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.770912Z",
                        "updated_at": "2020-09-24T07:26:39.770939Z",
                        "product": 2
                    },
                    {
                        "id": 10,
                        "image": "/media/products/2/2810155380.jpg",
                        "active": true,
                        "timestamp": "2020-09-24T07:26:39.776011Z",
                        "updated_at": "2020-09-24T07:26:39.776032Z",
                        "product": 2
                    }
                ],
                "title": "Adafruit FONA - Mini Cellular GSM Breakout uFL Version",
                "slug": "fona",
                "description": "Ring, Ring! Who's that callin'? It's your breadboard! Introducing Adafruit FONA MiniGSM, an adorable all-in-one cellular phone module that lets you add voice, text, SMS and data to your project in an adorable little package.\r\n\r\n**Please note: The T-Mobile GSM network is shutting down in the USA over the course of 2020 and beyond, so please be aware these are not for long term usage in the USA! [Please check out the FONA 3G for next-generation usage](https://www.adafruit.com/product/2687).**  \r\n\r\nThis module measures only 1.75\"x1.25\" but packs a surprising amount of technology into its little frame. At the heart is a GSM cellular module (we use the latest SIM800) the size of a postage stamp. This module can do just about everything. [This version has a uFL connector. For the SMA version, click here!](https://www.adafruit.com/products/1963)\r\n\r\n*   Quad-band 850/900/1800/1900MHz - connect onto any global GSM network with any 2G SIM (in the USA, T-Mobile is suggested)\r\n*   Make and receive voice calls using a headset OR an external 8Ω speaker + electret microphone\r\n*   Send and receive SMS messages\r\n*   Send and receive GPRS data (TCP/IP, HTTP, etc.)\r\n*   Scan and receive FM radio broadcasts (yeah, we don't exactly know why this was included but it works really well)\r\n*   PWM/Buzzer vibrational motor control\r\n*   AT command interface with \"auto baud\" detection\r\n\r\nSounds delicious, right? So we plated this fine module onto a little breakout with all the extras you need to make your next project shine:\r\n\r\n*   Onboard LiPoly battery charging circuitry so you can take your project on the go. Use any [500mAh+ LiPoly or LiIon battery](https://www.adafruit.com/search?q=500mah+lithium+ion+polymer+battery) and recharge over the MicroUSB when necessary. Two LEDs let you know when its charging and done\r\n*   Standard 4-pole TRRS headphone jack. Use any 'Android' or 'iPhone'-compatible headset with mic\r\n*   Breakouts for external 8Ω speaker and electret mic if you don't want to use a headphone\r\n*   Level shifting circuitry so you can run it with 2.8V to 5V logic.\r\n*   Vibrational motor (buzzer) driver so you can have noiseless notifications\r\n*   uFL connections for external antenna\r\n*   Indicator LEDs for power and network connectivity\r\n*   Standard SIM slides into the back\r\n\r\nOn its own, this module can't do anything. It requires a microcontroller to drive it! We suggest and use [an Arduino](https://www.adafruit.com/category/17) but any 3-5V microcontroller with a UART can send and receive commands over the RX/TX pins.  \r\n\r\n**You will also need some required accessories to make FONA work. These are not included!**\r\n\r\n*   **SIM Card! [](https://www.adafruit.com/products/2505) **[A 2G Mini SIM card is required to do anything on the cellular network. US AT&T no longer sells 2G SIMs and T-Mobile will shut off their 2G network over the course of 2020.](https://www.adafruit.com/products/2505)\r\n*   **Lipoly Battery** - 500mAh or larger! This [500mAh](https://www.adafruit.com/product/1578) battery, [or this 1200mAh](https://www.adafruit.com/products/258) will work great.\r\n*   **[MicroUSB cable](https://www.adafruit.com/products/592)** for charging the battery.\r\n*   [**External Antenna** - We like this slim sticker-type](https://www.adafruit.com/products/1991), which plugs right in. Alternatively,  [this straight SMA one](https://www.adafruit.com/products/1859) or this [right-angle SMA one will work](https://www.adafruit.com/products/1858) but you'll also need a** [uFL to SMA adapter cable](https://www.adafruit.com/products/851)** so you can connect to your SMA antenna\r\n\r\nThere's also some recommended accessories. They are not required but chances are you'll want them!\r\n\r\n*   [**TRRS 4-Pole Headset** - Any 'iPhone' or 'Android' compatible (but not iPhone original) should work. We tried about 10 different ones, and basically the more expensive once are more comfortable and louder but our official iPhone headset mic did not work.](https://www.adafruit.com/product/1966)\r\n*   **External Mic & Speaker** - If you want to talk directly to your FONA, [an electret mic](https://www.adafruit.com/product/1064) and [mini 8 ohm speaker](https://www.adafruit.com/product/1890) will do quite nicely.\r\n*   **Vibrating motor** - the FONA can drive this directly, [just solder a mini vibrating motor disc in!](https://www.adafruit.com/product/1201)\r\n*   **USB console cable** - the microUSB connector is for charging [only, but you can wire up a console cable for direct-connection to the module](https://www.adafruit.com/product/954) if you want to send commands from a terminal (great for testing and tweaking)",
                "tecnical_detail": "*   Dimensions w/Components: 45mm x 34mm x 8mm / 1.8\" x 1.3\" x 0.3\"\r\n*   Dimensions of PCB: 45mm x 32mm x 2mm / 1.8\" x 1.3\" x .1\"\r\n*   Weight: 9.0g\r\n\r\n**Revision History:**\r\n\r\n*   As of December 22, 2015 we have replaced the SIM800L module with SIM800H which is backward compatible. Note that this board design does not have a bluetooth antenna on it so you cannot use the BT capabilities of the SIM800H\r\n*   As of December 27, 2016 we are selling a new firmware revision of the module. The library is backwards compatible but we notice that the speaker output is a little quieter.\r\n\r\n**[Datasheets, app notes, PCB CAD files and Fritzing objects available in the tutorial](https://learn.adafruit.com/adafruit-fona-mini-gsm-gprs-cellular-phone-module/downloads)**",
                "price": "160000.00",
                "quantity": 10,
                "featured": false,
                "active": true,
                "timestamp": "2020-09-24T07:25:23.955940Z",
                "updated_at": "2020-09-25T03:03:35.973063Z"
            }
        ],
        'parent':'',
        'created_at':'',
        'updated_at':'',
    },
    
]

export default categoriesArray