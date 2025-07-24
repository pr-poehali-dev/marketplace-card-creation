import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  const [showQuickOrder, setShowQuickOrder] = useState(false);

  const productImages = [
    '/img/790de3cc-2b4d-4cce-a0cc-ee475abcbf2b.jpg',
    '/img/f3f83a57-2843-4ef4-880d-10390f36830d.jpg',
    '/img/790de3cc-2b4d-4cce-a0cc-ee475abcbf2b.jpg'
  ];

  const reviews = [
    { name: 'Анна К.', rating: 5, text: 'Отличные наушники! Звук супер, батарея держит долго. Рекомендую!', date: '15 июля 2024' },
    { name: 'Михаил Р.', rating: 4, text: 'Хорошее качество за свою цену. Дизайн стильный, удобно носить.', date: '10 июля 2024' },
    { name: 'Елена С.', rating: 5, text: 'Быстрая доставка, товар соответствует описанию. Очень довольна покупкой!', date: '8 июля 2024' }
  ];

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon 
        key={i} 
        name="Star" 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange to-purple bg-clip-text text-transparent">
                TechStore
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="relative">
                <Icon name="ShoppingCart" className="w-5 h-5" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-orange text-white min-w-[20px] h-5 flex items-center justify-center text-xs rounded-full">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden bg-white shadow-lg">
              <img
                src={productImages[selectedImage]}
                alt="Product"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex space-x-3">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index 
                      ? 'border-orange shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={image} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge className="bg-success text-white mb-3">Хит продаж</Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Беспроводные наушники TechPro Max
              </h1>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  {renderStars(5)}
                  <span className="text-sm text-gray-600 ml-2">4.8 (127 отзывов)</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-gray-900">2,490 ₽</span>
                <span className="text-xl text-gray-500 line-through">3,490 ₽</span>
                <Badge className="bg-orange text-white">-29%</Badge>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Truck" className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-800">Бесплатная доставка от 1000 ₽</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <Icon name="Clock" className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-green-700">Доставка завтра, если заказать до 18:00</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={addToCart}
                className="w-full bg-gradient-to-r from-orange to-orange-dark hover:from-orange-dark hover:to-orange text-white font-semibold py-3 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <Icon name="ShoppingCart" className="w-5 h-5 mr-2" />
                Добавить в корзину
              </Button>
              
              <Button 
                onClick={() => setShowQuickOrder(true)}
                variant="outline" 
                className="w-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold py-3 rounded-lg transition-all duration-200"
              >
                <Icon name="Zap" className="w-5 h-5 mr-2" />
                Быстрый заказ
              </Button>
            </div>

            <Separator />

            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Особенности:</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <Icon name="Check" className="w-5 h-5 text-success" />
                  <span className="text-gray-700">Активное шумоподавление</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="Check" className="w-5 h-5 text-success" />
                  <span className="text-gray-700">До 30 часов работы</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="Check" className="w-5 h-5 text-success" />
                  <span className="text-gray-700">Быстрая зарядка USB-C</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="Check" className="w-5 h-5 text-success" />
                  <span className="text-gray-700">Водонепроницаемость IPX4</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Отзывы покупателей</h2>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {renderStars(5)}
                  </div>
                  <span className="text-lg font-semibold">4.8</span>
                  <span className="text-gray-600">(127 отзывов)</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange to-purple rounded-full flex items-center justify-center text-white font-bold">
                          {review.name[0]}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{review.name}</h4>
                          <div className="flex items-center space-x-1">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Order Modal */}
        {showQuickOrder && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md bg-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Быстрый заказ</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowQuickOrder(false)}
                  >
                    <Icon name="X" className="w-5 h-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <img src={productImages[0]} alt="Product" className="w-16 h-16 rounded-lg object-cover" />
                    <div>
                      <h4 className="font-semibold">Беспроводные наушники TechPro Max</h4>
                      <p className="text-lg font-bold text-orange">2,490 ₽</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Номер телефона"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-orange to-orange-dark text-white font-semibold py-3">
                  Оформить заказ
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}