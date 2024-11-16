import React from 'react';
import { FaUserAlt, FaHeart, FaShoppingBag } from 'react-icons/fa';
import ImageSlider from './ImageSlider.tsx'; // Імпортуйте ваш компонент слайдера

const MainHeader = () => {
    return (
        <div>
            {/* Header Section */}
            <header style={{ backgroundColor: '#1d2733', padding: '10px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>

                    {/* Logo */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.8em', color: 'white', fontWeight: 'bold' }}>book</span>
                        <span style={{ fontSize: '1.8em', color: '#f4781d', fontWeight: 'bold' }}>opt</span>
                    </div>

                    {/* Catalog Button */}
                    <button style={{ backgroundColor: '#f4781d', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', fontSize: '1em', marginRight: '20px' }}>
                        КАТАЛОГ
                    </button>

                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Я шукаю..."
                        style={{
                            padding: '10px',
                            width: '300px',
                            borderRadius: '5px',
                            border: '1px solid #f4781d',
                            marginRight: '20px'
                        }}
                    />

                    {/* Price and Icons */}
                    <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                        <div style={{ marginRight: '15px' }}>0 ₴</div>
                        <div style={{ fontWeight: 'bold', color: '#f4781d', marginRight: '15px' }}>7 000 ₴</div>
                        <FaUserAlt style={{ fontSize: '1.2em', marginRight: '15px' }} />
                        <FaHeart style={{ fontSize: '1.2em', marginRight: '15px' }} />
                        <FaShoppingBag style={{ fontSize: '1.2em' }} />
                    </div>
                </div>
            </header>

            {/* Slider Section */}
            <ImageSlider /> {/* Додаємо слайдер тут */}
        </div>
    );
};

export default MainHeader;
