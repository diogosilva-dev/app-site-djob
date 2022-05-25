export default {
    name: 'NewslatterComponent',
    data(){
        return {

        };
    },
    methods: {
        abrirModalNewslatter(){
            const newslatter = document.querySelector('.newslatter')
            newslatter.style.opacity = '1'
            newslatter.style.visibility = 'visible'
            newslatter.style.transition = 'all 0.5s'
        },
        fecharNewslatter(){
            const newslatter = document.querySelector('.newslatter')
            newslatter.style.opacity = '0'
            newslatter.style.visibility = 'hidden'
            newslatter.style.transition = 'all 0.5s'
        }
    },
}