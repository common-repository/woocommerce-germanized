!function(){var n,i;window.shipments=window.shipments||{},window.shipments.admin=window.shipments.admin||{},n=jQuery,(i=window.shipments).admin.packaging={params:{},init:function(){var e=i.admin.packaging;n(document).on("change","input.gzd-override-toggle",e.onChangeOverride)},onChangeOverride:function(){var i=n(this),e=i.parents(".wc-gzd-shipping-provider-override-title-wrapper").next(".wc-gzd-packaging-zone-wrapper");e.removeClass("zone-wrapper-has-override"),i.is(":checked")&&e.addClass("zone-wrapper-has-override")}},n(document).ready((function(){i.admin.packaging.init()})),((window.wcGzdShipments=window.wcGzdShipments||{}).static=window.wcGzdShipments.static||{})["admin-packaging"]={}}();