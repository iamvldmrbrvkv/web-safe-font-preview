$(document).ready(() => {
  $('#text').on('keyup', e => {
    const value = $(e.currentTarget).val()
    $('.preview').html(value)
  })

  $('#font').on('change', e => {
    $('.preview').css('font-family', $(e.currentTarget).val())
  })

  $('#weight').on('change', e => {
    $('.preview').css('font-weight', $(e.currentTarget).val())
  })

  $('#size').on('keyup', e => {
    const fontSize = $(e.currentTarget).val() + 'px'
    $('.preview').css({
      fontSize: fontSize
    })
  })
})