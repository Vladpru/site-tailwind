function toggleMenu() {
    const burg = document.querySelector('#burg');
    const mobileMenu = document.querySelector('#mobile-menu');
    const body = document.querySelector('body');

    burg.addEventListener('click', () => {
        burg.classList.toggle('active');
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        body.classList.toggle('overflow-hidden');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 767.99) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
            burg.classList.remove('active');
            body.classList.remove('overflow-hidden');
        }
    })

};
toggleMenu()

// Tabs
function toggleTabs(tabsTriggerClass, tabsContentClass) {
    const tabsTriggers = document.querySelectorAll(tabsTriggerClass)
    const tabsContent = document.querySelectorAll(tabsContentClass)

    // tabsContent.forEach((el) => {
    //     el.classList.add('hidden')
    //     tabsContent[0].classList.remove('hidden')
    // })

    tabsTriggers.forEach((trigger, index) => {
        trigger.addEventListener('click',() => {
            tabsTriggers.forEach(t => t.classList.remove('active'))

            trigger.classList.add('active')

            tabsContent.forEach(content => {
                content.classList.add('hidden')
            })

            tabsContent[index].classList.remove('hidden')
        })
    })

}   
toggleTabs('.tab-trigger', '.tab-content')

// 
