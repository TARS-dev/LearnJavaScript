let weapons = document.querySelectorAll('.weapon')
let equipSlot = document.querySelector('.equip-slot')
let equipWeapon = document.querySelector('.equip-weapon')

function dragWeapon(e) {
    e.dataTransfer.setData('text/plain' , e.target.id)
    console.log(e.target.id)
}
weapons.forEach((weapon) => {
    weapon.addEventListener('dragstart',dragWeapon)
})
// drag 
function dragOverWeapon (e) {
    e.preventDefault()
    // html จะป้องกันการ drop การที่มี function นี้พร้อมกับ preventDefault() เพื่อจองพื้นที่
}

function dropWeapon (e) {
    e.preventDefault()
    const id = e.dataTransfer.getData('text/plain')
    const image = document.querySelector('#'+id)
    equipWeapon.src = image.src
}

equipSlot.addEventListener('dragover',dragOverWeapon)
equipSlot.addEventListener('drop',dropWeapon)