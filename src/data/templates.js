const staticUrl = "https://image.sendsay.ru/image/setpartnerstv/";

export const templates = [
  {
    name: 'Прехеадер',
    content:`<div style="text-align:center;font-size:16px;">
		{{preheader}}
		&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;&#10240;
	</div>`
  },
	{
		name:'styles',
		content:` <style type="text/css">
    body, table, td, a {
      text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    img {
		  width:100%;
      border: 0;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic; /* Ensure smooth image scaling in Outlook */
    }
    body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      line-height: 100%;
			font-family: Arial, sans-serif;
    }
    a {
      color: inherit;
      text-decoration: none;
    }

		p{
		margin:0;
		}

    /* Mobile Styles */
   
      {{styles}}
  
  </style>`
	},
	{
		name:`header_tematic`,
		content:`<table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: {{template_width}}px; margin: 0 auto; border-collapse: collapse;">
    <tr>
        <td align="center" valign="top" style="text-align: center; border-radius: 0 0 15px 15px;">
            <!-- Background Image Section -->
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; border-radius: 0 0 15px 15px;">
                <tr>
                    <td align="center" valign="top" background="${staticUrl}{{background_url}}.png" style="background-size: cover; background-position: center center; background-repeat: no-repeat; text-align: center; padding: 30px 10px 0 10px; border-radius: 0 0 15px 15px;">
                        <!-- Logo Section -->
                        <table class="logo" role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                            <tr>
                                <td align="center" style="padding-bottom: {{logo_spacer}}px;">
                                    <a href="{{logo_link}}" target="_blank" style="text-align: center; display: block;height:auto;">
                                        <img src="${staticUrl}{{logo_url}}.png" style="max-width: {{logo_width}}px; margin: 0 auto; display: block; border: 0;" alt="газпром бонус">
                                    </a>
                                </td>
                            </tr>
                        </table>

                        <!-- Text Section -->
                        <table class="main_title" role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; max-width: {{title_width}}px; margin: 0 auto;">
                            <tr>
                                <td align="center" style="font-size: {{title_fz}}px; font-weight: {{title_fw}}; line-height: {{title_lh}}; letter-spacing: {{title_ls}}; color: {{title_color}}; text-align: center;">
                                    {{title_area}}
                                </td>
                            </tr>
                        </table>

                        <!-- Spacer -->
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                            <tr>
                                <td height="{{image_spacer}}" style="line-height:{{image_spacer}};font-size: 0; line-height: 0;">
																 <a href="{{image_link}}" target="_blank" width="100%" style="display:block;width:100%;height:100%;"></a>
																</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>`
	}
];
