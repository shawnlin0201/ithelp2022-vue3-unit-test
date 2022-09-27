import LandingPage from '../views/LandingPage.vue'
import IntroPage from '../views/IntroPage.vue'

export const routeSetting = {
  // 首頁
  LandingPage: {
    path: '/',
    name: 'landing-page',
    component: LandingPage,
  },
  // 引導頁
  Intro: {
    path: '/intro/:page',
    name: 'intro-page',
    component: IntroPage,
  },
}

export const routes = (() => {
  const result = []
  for (const i in routeSetting) {
    result.push({
      path: routeSetting[i].path,
      name: routeSetting[i].name,
      component: routeSetting[i].component,
    })
  }
  return result
})()
