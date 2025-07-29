import { Link } from 'react-router-dom';
import { Shield, Award, Heart, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const values = [
  {
    icon: Heart,
    titleKey: 'Hospitality & Care',
    descriptionKey: 'We treat every client like family, ensuring a warm, welcoming, and supportive experience from start to finish.',
    titleAr: 'الضيافة والعناية',
    descriptionAr: 'نتعامل مع كل عميل كأنه فرد من عائلتنا، مما يضمن تجربة دافئة ومرحبة وداعمة من البداية إلى النهاية.'
  },
  {
    icon: Shield,
    titleKey: 'Safety & Security',
    descriptionKey: 'Your safety is our top priority. We adhere to the highest safety standards and work with trusted partners.',
    titleAr: 'السلامة والأمان',
    descriptionAr: 'سلامتكم هي أولويتنا القصوى. نحن نلتزم بأعلى معايير السلامة ونعمل مع شركاء موثوقين.'
  },
  {
    icon: Award,
    titleKey: 'Excellence & Quality',
    descriptionKey: 'We are committed to delivering the highest quality in all our services, from luxury transport to expert guides.',
    titleAr: 'التميز والجودة',
    descriptionAr: 'نحن ملتزمون بتقديم أعلى مستويات الجودة في جميع خدماتنا، من النقل الفاخر إلى المرشدين الخبراء.'
  },
  {
    icon: Globe,
    titleKey: 'Local Expertise',
    descriptionKey: 'Our deep knowledge of the region allows us to offer unique and authentic experiences that others cannot.',
    titleAr: 'الخبرة المحلية',
    descriptionAr: 'معرفتنا العميقة بالمنطقة تسمح لنا بتقديم تجارب فريدة وأصيلة لا يمكن للآخرين تقديمها.'
  }
];

const team = [
  {
    name: 'Ahmed Mohamed',
    positionKey: 'General Manager',
    experienceKey: '20+ years of experience in the tourism sector.',
    nameAr: 'أحمد محمد',
    positionAr: 'المدير العام',
    experienceAr: 'خبرة تزيد عن 20 عامًا في قطاع السياحة.',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Sarah Ahmed',
    positionKey: 'Operations Manager',
    experienceKey: 'Expert in crafting unique and seamless travel itineraries.',
    nameAr: 'سارة أحمد',
    positionAr: 'مديرة العمليات',
    experienceAr: 'خبيرة في صياغة مسارات سفر فريدة وسلسة.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Mohamed Kamel',
    positionKey: 'Lead Tour Guide',
    experienceKey: 'Passionate about sharing the beauty and culture of Kenya.',
    nameAr: 'محمد كامل',
    positionAr: 'مرشد سياحي أول',
    experienceAr: 'شغوف بمشاركة جمال وثقافة كينيا.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const stats = [
  { number: '500+', labelKey: 'Happy Clients', labelAr: 'عملاء سعداء' },
  { number: '50+', labelKey: 'Destinations Explored', labelAr: 'وجهات تم استكشافها' },
  { number: '10+', labelKey: 'Years of Experience', labelAr: 'سنوات من الخبرة' },
  { number: '98%', labelKey: 'Satisfaction Rate', labelAr: 'معدل الرضا' }
];

export const AboutUs = () => {
  const { language } = useLanguage();

  return (
    <div className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true" />

      <div className="py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-20 text-white">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6">
              {language === 'en' ? 'About Injaaz Tours' : 'عن إنجاز للسياحة'}
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed mb-4 sm:mb-6 lg:mb-8">
                {language === 'en'
                  ? 'Discover the heart of Africa with a team that is passionate about creating unforgettable experiences. We are more than a travel company; we are your partners in adventure.'
                  : 'اكتشف قلب أفريقيا مع فريق شغوف بخلق تجارب لا تُنسى. نحن أكثر من مجرد شركة سفر، نحن شركاؤك في المغامرة.'}
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                {language === 'en'
                  ? 'Our commitment is to provide you with the highest level of service and authentic encounters with nature and culture.'
                  : 'التزامنا هو أن نقدم لكم أعلى مستوى من الخدمة واللقاءات الأصيلة مع الطبيعة والثقافة.'}
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat) => (
              <div key={stat.labelKey} className="text-center">
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-1 sm:mb-2">{stat.number}</h3>
                  <p className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">{language === 'en' ? stat.labelKey : stat.labelAr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-20">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6">{language === 'en' ? 'Our Core Values' : 'قيمنا الأساسية'}</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200">{language === 'en' ? 'The principles that guide our every decision.' : 'المبادئ التي توجه كل قرار نتخذه.'}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value) => (
              <div key={value.titleKey} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 text-center hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 lg:mb-6 flex items-center justify-center">
                  <value.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-green-800 mb-2 sm:mb-3 lg:mb-4">{language === 'en' ? value.titleKey : value.titleAr}</h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">{language === 'en' ? value.descriptionKey : value.descriptionAr}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-20">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6">{language === 'en' ? 'Meet Our Expert Team' : 'تعرف على فريق الخبراء لدينا'}</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200">{language === 'en' ? 'The passionate professionals behind your unforgettable journeys.' : 'المحترفون الشغوفون وراء رحلاتك التي لا تُنسى.'}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={language === 'en' ? member.name : member.nameAr}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-lg lg:text-xl font-bold text-green-800 mb-1 sm:mb-2">{language === 'en' ? member.name : member.nameAr}</h3>
                  <p className="text-yellow-600 font-medium mb-1 sm:mb-2 text-sm lg:text-base">{language === 'en' ? member.positionKey : member.positionAr}</p>
                  <p className="text-gray-600 text-xs sm:text-sm">{language === 'en' ? member.experienceKey : member.experienceAr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="text-white">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">{language === 'en' ? 'Our Mission & Vision' : 'مهمتنا ورؤيتنا'}</h2>
                <div className="mb-4 sm:mb-6 lg:mb-8">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 lg:mb-4 text-yellow-300">{language === 'en' ? 'Our Vision' : 'رؤيتنا'}</h3>
                  <p className="text-sm sm:text-base lg:text-lg text-green-100 leading-relaxed">
                    {language === 'en'
                      ? 'To be the leading tour operator in East Africa, renowned for our exceptional service, local expertise, and commitment to sustainable tourism.'
                      : 'أن نكون الشركة الرائدة في تنظيم الرحلات السياحية في شرق أفريقيا، مشهورين بخدمتنا الاستثنائية وخبرتنا المحلية والتزامنا بالسياحة المستدامة.'}
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="A beautiful safari scene in Kenya"
                  className="rounded-xl shadow-2xl w-full h-48 sm:h-64 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          <div className="text-center bg-white rounded-xl lg:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 xl:p-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-800 mb-3 sm:mb-4 lg:mb-6">
              {language === 'en' ? 'Join the Injaaz Family' : 'انضم إلى عائلة إنجاز'}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Let us design an unforgettable travel experience for you in the beautiful heart of Africa.'
                : 'دعنا نصمم لك تجربة سياحية لا تُنسى في قلب أفريقيا الجميلة.'}
            </p>
            <div className="flex flex-col xs:flex-row justify-center gap-3 sm:gap-4">
              <Link
                to="/request-quote"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all transform hover:scale-105"
              >
                {language === 'en' ? 'Book Your Trip Now' : 'احجز رحلتك الآن'}
              </Link>
              <Link
                to="/contact"
                className="border-2 border-green-600 text-green-600 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:bg-green-600 hover:text-white transition-all"
              >
                {language === 'en' ? 'Contact Us' : 'تواصل معنا'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
