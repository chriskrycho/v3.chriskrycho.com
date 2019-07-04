jQuery(document).ready(function()
{
	jQuery('.wp_syntax').bind(
	{
		mouseover: function()
		{
			var w = jQuery(this).find('table').outerWidth();
			var hw = jQuery(document).width() - jQuery(this).offset().left - 20;
			
			if(w > jQuery(this).outerWidth())
				jQuery(this).css({'position':'relative', 'z-index':'9999', 'box-shadow':'5px 5px 5px #888', 'width':(w > hw ? hw : w)+'px'});
		},
		mouseout: function()
		{
			jQuery(this).removeAttr('style');
		}					
	});
});