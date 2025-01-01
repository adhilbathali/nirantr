const serviceCard = document.getElementById('consumer-research')
const subContent = document.getElementById('hell')
const section = document.getElementById('custom-solutions')

const dragUp = ()=>{
    subContent.classList.toggle('sub-content-drag-up')
    if(subContent.classList.contains('sub-content-drag-up')){
        subContent.scrollIntoView({
            behavior:'smooth',
        })
    }
    else{
        section.scrollIntoView(
            {
                behavior:'smooth'
            }
        )

    }
}