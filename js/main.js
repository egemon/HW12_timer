$((function(global){

	var myTimerApp = {
		$startButton : $('#start-button'),
		$pauseButton:  $('#pause-button'),
		$stopButton:  $('#stop-button'),

		$secSpan:  $('#sec'),
		$minSpan:  $('#min'),
		$hourSpan:  $('#hour'),
		
		sec: 0,
		min : 0,
		hour :0,

		myTimer : {},
		isWorks : false, 

		init : function() {
			myTimerApp.bindEvents();	
		},
		
		bindEvents : function() {
			myTimerApp.bindStart();
			myTimerApp.bindPause();
			myTimerApp.bindStop();
		},

		bindStart: function() {
			myTimerApp.$startButton.click(function(){
				if (myTimerApp.isWorks) {return;}
				myTimerApp.isWorks = true;

				myTimerApp.myTimer = setInterval(function(){
						myTimerApp.sec = +myTimerApp.$secSpan.text();
						myTimerApp.min = +myTimerApp.$minSpan.text();
						myTimerApp.hour = +myTimerApp.$hourSpan.text();
						
						myTimerApp.sec++;
							
						if (myTimerApp.sec / 60 == 1) {
								myTimerApp.sec = 0 ;
								myTimerApp.min++;
							};
						if (myTimerApp.min / 60 == 1) {
								myTimerApp.min = 0;
								myTimerApp.hour++;
							};

						myTimerApp.renderTimer();	
						
				},1000 );
			});
		},

		renderTimer : function () {
			myTimerApp.$secSpan.html(myTimerApp.sec);
			myTimerApp.$minSpan.html(myTimerApp.min); 
			myTimerApp.$hourSpan.html(myTimerApp.hour);
		},

		bindPause : function() {
			myTimerApp.$pauseButton.click(function() {
				myTimerApp.isWorks = false;
				window.clearInterval(myTimerApp.myTimer);
			});
			
		},
		bindStop : function() {
			myTimerApp.$stopButton.click(function() {
				myTimerApp.isWorks = false;
				window.clearInterval(myTimerApp.myTimer);
				
				myTimerApp.sec = 0;
				myTimerApp.min = 0;
				myTimerApp.hour = 0;

				myTimerApp.renderTimer();

			});
			
		}

	};


	global.Timer = myTimerApp;
	global.Timer.init();

	
})(window))


