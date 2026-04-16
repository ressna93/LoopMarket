import { HeroSection } from './HeroSection'
import { CategorySection } from './CategorySection'
import { FeaturedProducts } from './FeaturedProducts'
import './MainPage.css'

export const MainPage = () => {
  return (
    <div className="main-page">
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
    </div>
  )
}
