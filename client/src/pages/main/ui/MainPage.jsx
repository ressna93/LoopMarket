import { HeroSection } from './HeroSection'
import { CategorySection } from './CategorySection'
import { FeaturedProducts } from './FeaturedProducts'
import { RecentViewedSection } from './RecentViewedSection'
import './MainPage.css'

export const MainPage = () => {
  return (
    <div className="main-page">
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <RecentViewedSection />
    </div>
  )
}
