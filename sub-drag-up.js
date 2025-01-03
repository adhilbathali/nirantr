var flag = true

const dragUp = (subContent, subContentContainer, clickedSection, serviceCard)=>{
    subContentContainer.querySelector('p').textContent = subContent
    if (window.innerWidth < 828){
        if(serviceCard.classList.contains('service-card-contrast')){
            subContentContainer.classList.add('sub-content-drag-up')
            serviceCard.parentNode.insertBefore(subContentContainer, serviceCard.nextSibling)
            if(flag){
                subContentContainer.scrollIntoView({
                    behavior:'smooth',
                    block:'center'
                })
            }
    
            flag = false
    
        }
        else{
            subContentContainer.classList.remove('sub-content-drag-up')
            setTimeout(() => {
                const cardContainer = clickedSection.querySelector('.card-container')
                cardContainer.parentNode.insertBefore(subContentContainer, cardContainer.nextSibling)
              }, 800)
            clickedSection.scrollIntoView(
                {
                    behavior:'smooth',
                    block:'center'
                }
            )
            flag = true
        }
        return
    }

    if(serviceCard.classList.contains('service-card-contrast')){

        subContentContainer.classList.add('sub-content-drag-up')
        if(flag){
            subContentContainer.scrollIntoView({
                behavior:'smooth',
                block:'center'
            })
        }

        flag = false

    }
    else{
        subContentContainer.classList.remove('sub-content-drag-up')
        clickedSection.scrollIntoView(
            {
                behavior:'smooth',
                block:'center'
            }
        )

        flag = true
    }
}

document.body.addEventListener('click', (e)=>{
    
    const serviceCard = e.target.closest('.service-card')
    if(serviceCard){
        document.querySelectorAll('.service-card').forEach((card)=>{
            if(card !== serviceCard){
                card.classList.remove('service-card-contrast')
            }
        })
        serviceCard.classList.toggle('service-card-contrast')
        const subContent = serviceCard.querySelector('p').textContent
        const clickedSection = e.target.closest('section')
        const subContentContainer = clickedSection.querySelector('.sub-content-desktop')
        dragUp(subContent, subContentContainer, clickedSection, serviceCard)
    }

})
