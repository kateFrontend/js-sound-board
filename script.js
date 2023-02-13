 const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

 sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    document.getElementById('buttons').appendChild(btn)
 })