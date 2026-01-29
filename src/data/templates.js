const templates = [
    {
        id: 1,
        title: "Elegant Floral Journey",
        category: "Wedding • Cinematic",
        duration: "0:30",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8orMasmPQd9CAGRHsFGsf87F_3UG040K3re99XRuEb0NiBYhPKAEEH-uo9NbzTIbCHkOt5bVZd_AUNk9QrL1aYzDzfCBO3AmJgG0cK3brp_j02LvcoCF8R1OqyuOJJWVqMn7gNVA-TcjRWS_S-i5aRaELBsCnzMwx41xOkUpVhnTVguKHLEPVkEcENeJMWt56lWIScyqEIIr6WECuGwEZe0PXvZZC8i0JMdjWIy1l3VvYfZIaga2h92fCDDT9pxYzlqMqvldavVxO",
        isPro: true
    },
    {
        id: 2,
        title: "Dragon Year Greeting",
        category: "CNY • Vibrant",
        duration: "0:15",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVBRAj67NAwyfe87IFvx0p0Hor5t_e_RIaVmXpfGMS28bqnh6UCAa5ljeNgh1PXIUPoygiMFDpcfaktb5U6W-FpDDPqODWx44B9YA425veP6D8ul1i1X5lTkPQ0HbeA5-bQnwahsT7Ef8sT_RobJEwUJU39Bb4PK_zs869ImnWwrPNMsfpScyWZUlguCkgFNO9e0awaBZQokg0GyxQ1f_8Dp9yugCjyBgC6Sz4tdlWtruBNUt23K1IvQKqJ3HQp4mDVZCDmFiCyoVf",
        isPro: false
    },
    {
        id: 3,
        title: "Summer Vlog Recap",
        category: "Travel • Dynamic",
        duration: "1:00",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3SPGcgQM5ej198J8jXHn-9CnVi9qGCU_qQfv11ltbbgd0T7N9p2E2h_EoXz8sQFxrcAG5qVpIuZBQOE2c6Bie1IY5PWBtilxQpV-dMZY5FFBKpV92yimBraMsrUzdkR61Ud3iZUaMgqjb1oRuv64cNtEC8IUxjbMtBAZ0skPyFyCGXEFvxq3gkB4GObCR7Vqqi0UyM_FeffMqRiZFu1ZJHUazju1dvRmu5lbX6X7QHwH6BAgZbYy6SpzXRGBa5edFnIMYyZhpA3vG",
        isPro: true
    },
    {
        id: 4,
        title: "Class of 2024 Montage",
        category: "Graduation • Nostalgic",
        duration: "0:45",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5zKukkXMc_0aTUAaE3hExywVjYCdUpgBfoa-xTY3UM5zRMvY1kuOhQX-s99Uifp5Lk4sJ4_ZqE4HSkfFCBvnoJ2uPgSYvmdi_2HLmQf6yO910BvPZrnabwYOoxNMeZ0vYWAU_abTBjHwK4Yox12dpYDLa9VQ9LcvV4D5bhfpHdNnnH69O3FRWU5ipcL8JegKPs88bIOetvbHepzfaAS3Xw9B-uKyiP_sXLFeP8iUIipvtV2do6xe-2xF5IQ19stj47IPLMGxn1Qdi",
        isPro: false
    },
    {
        id: 5,
        title: "Birthday Bash",
        category: "Birthday • Fun",
        duration: "0:20",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-XcBUAoHBlzgGlrvgQLpGZmwkinc-7Fs9FHUcd3jFgAMQHyU_AJLubgtc17_0pn8skkACu2jT7Tp9XLD_6YXLrPWzWp8ZlNu13UEXGDipAYFYAhc0upv6jfAsku6fdns-NkRk8GpINS4AjXoDpKd7Zv6HABklhSRszpQKcIvbIXj-juu6knr-WbqSRd5kigOLk9DCnGGU9SWir5AG3Muta61vjTbUZDKjRLd8C0iy3D54tIjv2v5lLy5YWwct8b3pEjdNoKFQSpq0",
        isPro: false
    },
    {
        id: 6,
        title: "Corporate Promo",
        category: "Corporate • Professional",
        duration: "0:40",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiKCuhYRydd-g0e_4ku0uITk2M48U9_9qH16CDq_W-XUmRQnB9KiCpNdTtHWIhVSTHm7jcRku2Tx2dKRw_JVwcS2Ht7k7YoYVHr-2yXpY6d8yoU_TSFYio0HWfrBHYVqF01ldWyEcUeAJpd4cJNii7rEqdS3OAiuHJIgEhszpP--DscViqfA0R0b7grXbOy74LEr_wEX9qGeQ3KP3WEUUnhb7H6-Vz6ux-NT3d_Xya6yfmGGIwanmIuW8LZPRcqkwzQw8KrEmfaA8P",
        isPro: true
    },
    {
        id: 7,
        title: "Sweet Arrival",
        category: "Baby Shower • Cute",
        duration: "0:55",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5xlj-RDBFU1pC2NifekRXchjMLbAbh9AZgiaUwQvyepeNWE7SFTcqbaf6ZMK0BwjMUGuFUVf88jUveByYOyxw9tcuc6gN9ysNPxCpr3dMBbn2VUuNZ76_oXf7z5LeVM9ITwoxSKtMeIx0lW1KqSWcT3ZYTL8rqDoM4WqqSRnUt8n1vcvy8I4izCW0vwa5c-QWTbfydAwd8PrpuGtDSCpM_F5UCHH59YXWM0x4Cn-jcMekDTFfEnOvfjoKVLdTY2iEjEJ7PNmnYo5e",
        isPro: true
    },
    {
        id: 8,
        title: "Vintage Memories",
        category: "General • Retro",
        duration: "1:15",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2gy8wZhsQ5wdjLltSZ8TDUn94cX0EQ-DK_QkitoF2inrnusfWvQPfi0ojy8snAyrOh2_c2JAnbxkiUEhpR-EqsE63WGhq_F2UXxAj6wd8quf-5dXC_ktcYdFz7prA2PBIngPcEcYI8pf9uLd9dXLuV0r3XL9iQuKocePkk-Zpjdqpua4SQd66TfCragLQWWdmE7sa7PDr3AdJh2wHFMlQDuuAZNkK6-1fmrruXybHGj_O0SA9xxSIgZKf1y6CpyWlsMldAW1sR3hn",
        isPro: false
    }
];

export default templates;
