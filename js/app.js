$(function(){
	var newDataFlag = 'data-driven';
	var Dispatcher = _.extend({},Backbone.Events);

	setInterval(function(){
		var currentTime = (new Date()).toLocaleTimeString();
		Dispatcher.trigger(newDataFlag,currentTime);
	},1000);

	var currentTimeView = Backbone.View.extend({
		initialize: function(){
			_(this).bindAll('render');

			Dispatcher.on(newDataFlag,this.render);
		},
		render: function(currentTime){
			this.el.textContent = currentTime;
		}

	});

	new currentTimeView({
		el: document.getElementById('current-time')
	});
});