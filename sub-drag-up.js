var flag = true

const dragUp = (subContent, subContentContainer, clickedSection, serviceCard)=>{
    subContentContainer.querySelector('p').textContent = subContent
    if (window.innerWidth < 828){
        if(serviceCard.classList.contains('service-card-contrast')){
            subContentContainer.classList.add('sub-content-drag-up')
            serviceCard.parentNode.insertBefore(subContentContainer, serviceCard.nextSibling)
            serviceCard.scrollIntoView({
                behavior:'smooth',
                block:'start'
            })
            setTimeout(()=>{
                window.scrollBy({
                    top: -120, // Amount to scroll vertically (positive for down, negative for up)
                    behavior: 'smooth' // Smooth scrolling
                  });
            },500)           
        }
        else{
            subContentContainer.classList.remove('sub-content-drag-up')
            const cardContainer = clickedSection.querySelector('.card-container')
            setTimeout(() => {
                cardContainer.parentNode.insertBefore(subContentContainer, cardContainer.nextSibling)
              }, 450)
            cardContainer.scrollIntoView(
                {
                    behavior:'smooth',
                    block:'start'
                }
            )
            window.scrollBy({
                top: 100, // Amount to scroll vertically (positive for down, negative for up)
                behavior: 'smooth' // Smooth scrolling
              });           
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
