Ext.define('Aap.model.Address', {
 	extend: 'Ext.data.Model',
    fields: [
    	{ name: 'id', type: 'int'},
    	{ name: 'city', type: 'string'}
	],
	proxy: {
    	type: 'ajax',
    	url: 'data/addresses.json',
    	reader: { 
			type: 'json',
      		root: 'children',
      		successProperty: 'success'
    	}
  	}	
});
