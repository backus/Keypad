submitKey = ->
	key = $('input.key-input').val()
	return if key is ''
	$.post '/unlock', 
		key : key
	, (data)->
		if data is 'correct' then newClass = 'label-success' else newClass = 'label-warning'
		if data is 'correct' then text = 'welcome' else text = 'gtfo'
		$("span.message-container").text text
		$("span.message-container").removeClass('.label-success.label-warning').addClass(newClass)	
		$("span.message-container").show()



$ ->
	$('.btn.btn-key').on 'click', ->
		$('input.key-input').val $('input.key-input').val() + $(@).text()

	$('form.key-form').on 'submit', (ev)->
		ev.preventDefault()
		submitKey()

	$('.btn.btn-enter').on 'click', ->
		submitKey()
