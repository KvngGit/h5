(function($) {
	$.fn.typewriter1 = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '' : '_'));
				if(!($ele.is(":visible"))) {
					clearInterval(timer);
					$ele.html(str);
				}
				if (progress >= str.length) {
					clearInterval(timer);
					$('#text-part1').fadeOut(2000);
					setTimeout(function () {
						$('#slide2-text').hide();
						$("#text-part2").show();
						$("#text-part2").typewriter2();
					}, 2000);  // 5t秒后开始显示garden
				}
			}, 125);
		});
		return this;
	};
})(jQuery);

(function($) {
	$.fn.typewriter2 = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '' : '_'));
				if(!($ele.is(":visible"))) {
					clearInterval(timer);
					$ele.html(str);
				}
				if (progress >= str.length) {
					clearInterval(timer);
					$('#text-part2').fadeOut(2000);
					setTimeout(function () {
						$('#text-part2').hide();
						$("#text-part3").show();
						$("#text-part3").typewriter3();
					}, 2000);  // 5t秒后开始显示garden
				}
			}, 125);
		});
		return this;
	};
})(jQuery);

(function($) {
	$.fn.typewriter3 = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '' : '_'));
				if(!($ele.is(":visible"))) {
					clearInterval(timer);
					$ele.html(str);
				}
				if (progress >= str.length) {
					clearInterval(timer);
					$('#text-part3').fadeOut(2000);
					setTimeout(function () {
						$('#text-part3').hide();
						$("#text-part4").show();
						$("#text-part4").typewriter4();
					}, 2000);  // 5t秒后开始显示garden
				}
			}, 125);
		});
		return this;
	};
})(jQuery);

(function($) {
	$.fn.typewriter4 = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '' : '_'));
				if(!($ele.is(":visible"))) {
					clearInterval(timer);
					$ele.html(str);
				}
				if (progress >= str.length) {
					clearInterval(timer);
					$('#text-part4').fadeOut(2000);
					setTimeout(function () {
						$('#text-part4').hide();
						$("#text-part5").show();
						$("#text-part5").typewriter5();
					}, 2000);  // 5t秒后开始显示garden
				}
			}, 125);
		});
		return this;
	};
})(jQuery);

(function($) {
	$.fn.typewriter5 = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '' : '_'));
				if(!($ele.is(":visible"))) {
					clearInterval(timer);
					$ele.html(str);
				}
				if (progress >= str.length) {
					clearInterval(timer);
					$('#text-part5').fadeOut(2000, function() {
						showPhoto();
					});
					//$('#code').fadeOut(2000);
					//document.getElementById("code").style.display = "none";
					setTimeout(function () {
						$('#text-part5').hide();
						adjustWordsPosition();
						startRectangleAnimation();  // 矩形花圃
						//startHeartAnimation();
					}, 2000);  // 5t秒后开始显示garden
				}
			}, 125);
		});
		return this;
	};
})(jQuery);

