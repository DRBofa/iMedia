import Uploads from './pages/Upload'
import Muiscs from './pages/Music'
// import Videos from './pages/Videos'
import Images from './pages/Images'
import Files from './pages/File'

const routes = [
    {
        path: '/uploads',
        component: Uploads
    },
    {
        path: '/musics',
        component: Muiscs
    },
    // {
    //     path: '/videos',
    //     component: Videos
    // },
    {
        path: '/images',
        component: Images
    },
    {
        path: '/files',
        component: Files
    },
]
export default routes