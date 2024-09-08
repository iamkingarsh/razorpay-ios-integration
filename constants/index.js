import { Headphones, MapPin, Plus, ServerIcon, ShoppingBag, UserIcon } from "lucide-react-native";
import { COLORS } from "./theme";
import { useSelector } from "react-redux";

const Address = "Hyderabad, India";
const pincode = "523001";
const User = {
    name: "Arshad",
    email: "mohammedarshad.arsh@gmail.com",
    phone: "91800808080",
    id: "561a3f0e-66cb-4f5d-b2e5-a19ef30a31b4",
    address: Address,
    pincode: pincode,
    isSubscribed: true,
    isVerified: true,
    isProfileComplete: true,
    subscriptionExpiryDate: new Date().setDate(new Date().getDate() + 30),
    profileUrl: "https://mohammedarshad.com/assets/logo-5449fe38.png"

}

const LaundryProducts = [
    {
        id: 'lp12359asd',
        product_name: 'Shirts',
        value: 'shirts',
        category: 'Women',
        priceperpair: 50,
        status: 'Active'
    },
    {
        id: 'lp45678adb',
        product_name: 'TShirts',
        value: 'tshirts',
        category: 'Household',
        priceperpair: 50,
        status: 'Active'
    },
    {
        id: 'lp45378asv',
        product_name: 'Trousers',
        value: 'trousers',
        category: 'Men',
        priceperpair: 50,
        status: 'Active'
    },
    {
        id: 'lp45325sfe',
        product_name: 'Jeans',
        value: 'jeans',
        category: 'Men',
        priceperpair: 50,
        status: 'Active'
    },
    {
        id: 'lp41478adr',
        product_name: 'Shorts',
        value: 'shorts',
        category: 'Men',
        priceperpair: 50,
        status: 'Active'
    },
    {
        id: 'lp4238dar',
        product_name: 'Kurtas',
        value: 'kurtas',
        priceperpair: 50,
        category: 'Men',
        status: 'Active'
    },
    {
        id: 'lp4381ndr',
        product_name: 'Kurtis',
        value: 'kurtis',
        priceperpair: 50,
        category: 'Men',
        status: 'Active'
    },
    {
        id: 'lp2381nxr',
        product_name: 'Sarees',
        value: 'sarees',
        priceperpair: 50,
        category: 'Men',
        status: 'Active'
    },
    {
        id: 'lp2881xzr',
        product_name: 'Bedsheets',
        value: 'bedsheets',
        priceperpair: 50,
        category: 'Men',
        status: 'Active'
    },
    {
        id: 'lp2801xcr',
        product_name: 'Blankets',
        value: 'blankets',
        priceperpair: 50,
        category: 'Men',
        status: 'Active'
    },
    {
        id: 'lp2841xtr',
        product_name: 'Curtains',
        value: 'curtains',
        priceperpair: 50,
        category: 'Men',
        status: 'Active'
    },
    {
        id: 'lp2081xsr',
        product_name: 'CushionCovers',
        value: 'cushioncovers',
        priceperpair: 50,
        category: 'Men',
        status: 'Active'
    },
    {
        id: 'lp2981xzr',
        product_name: 'PillowCovers',
        value: 'pillowcovers',
        priceperpair: 50,
        category: 'Men',
        status: 'Active'
    },
    {
        id: 'lp2080srx',
        product_name: 'Towels',
        value: 'towels',
        priceperpair: 50,
        category: 'Men',
        status: 'Active'
    },
    {
        id: 'lp2880srq',
        product_name: 'Masks',
        value: 'masks',
        priceperpair: 50,
        category: 'Men',
        status: 'Active'
    },


]

const Services = [
    {
        _id: 'AL1469',
        serviceTitle: 'Dry Cleaning',
        servicestatus: 'Active',
        laundry_items: [
            ...LaundryProducts,
        ]
        ,
        laundrybykg: 'Active',
        laundrybykgprice: 50,
        laundryperpair: 'Deactive',
        icon: <ServerIcon className="w-3 mr-2" />

    },
    {
        _id: 'AL1479',
        serviceTitle: 'Premium Laundry',
        servicestatus: 'Active',
        laundry_items: LaundryProducts.slice(0, 3).map(item => item),

        laundrybykg: 'Active',
        laundrybykgprice: 50,
        laundryperpair: 'Active',
        icon: <ServerIcon className="w-3 mr-2" />
    },
    {
        _id: 'AL1489',
        serviceTitle: 'Laundry',
        servicestatus: 'Active',
        laundry_items: [

            ...LaundryProducts,
        ]
        ,
        laundrybykg: 'Active',
        laundrybykgprice: 50,
        laundryperpair: 'Active',
        icon: <ServerIcon className="w-3 mr-2" />
    },
    {
        _id: 'AL1499',
        serviceTitle: 'Steam Ironing',
        servicestatus: 'Active',
        laundry_items: [
            ...LaundryProducts,
        ]
        ,
        laundrybykg: 'Active',
        laundrybykgprice: 50,
        laundryperpair: 'Active',
        icon: <ServerIcon className="w-3 mr-2" />
    },


]

const categories = [
    {
        _id: 'ct12359asd',
        title: 'Men',
    },
    {
        _id: 'ct12359afd',
        title: 'Women',
    },
    {
        _id: 'ct12359ald',
        title: 'Household',
    },
    {
        _id: 'ct12359aad',
        title: 'Kids',
    }
]

const PickupDates = [
    {
        id: 'pd12359asd',
        title: 'Today',
        date: new Date(),
    },
    {
        id: 'pd12359afd',
        title: 'Tomorrow',
        date: new Date().setDate(new Date().getDate() + 1),
    },
    {
        id: 'pd12359ald',
        title: 'Day After Tomorrow',
        date: new Date().setDate(new Date().getDate() + 2),
    }
]

const TimeSlots = [
    {
        id: 'ts12359asd',
        title: 'Morning',
        time: '9:00 AM - 12:00 PM',
    },
    {
        id: 'ts12359afd',
        title: 'Afternoon',
        time: '1:00 PM - 3:00 PM',
    },
    {
        id: 'ts12359ald',
        title: 'Evening',
        time: '4:00 PM - 6:00 PM',
    },
    {
        id: 'ts12359aad',
        title: 'Night',
        time: '7:00 PM - 9:00 PM',
    }
]

const AppBanners = [
    {
        id: 'bn12359asd',
        image: 'https://firebasestorage.googleapis.com/v0/b/aplus-laundry-storage.appspot.com/o/app-banners%2F7556842.png?alt=media&token=da23c9cd-bbd2-4f44-9f70-d0858405bf3f'
    },
    {
        id: 'bn12359afd',
        image: 'https://firebasestorage.googleapis.com/v0/b/aplus-laundry-storage.appspot.com/o/app-banners%2Fabout.png?alt=media&token=3ff655ce-6401-4ef6-bf09-7d8e530268c8'
    },
    {
        id: 'bn12359abd',
        image: 'https://firebasestorage.googleapis.com/v0/b/aplus-laundry-storage.appspot.com/o/app-banners%2Fabout.png?alt=media&token=3ff655ce-6401-4ef6-bf09-7d8e530268c8'
    },
    {
        id: 'bn12359add',
        image: 'https://firebasestorage.googleapis.com/v0/b/aplus-laundry-storage.appspot.com/o/app-banners%2Fabout.png?alt=media&token=3ff655ce-6401-4ef6-bf09-7d8e530268c8'
    },
]

const BaseFee = 50;

const YOUR_SHOP_LATITUDE = 17.4002904;
const YOUR_SHOP_LONGITUDE = 78.4118051;

const YOUR_RADIUS_IN_KM = 50;


//Account Settings
const QuickTabs = [
    {
        id: 'qt12359asd',
        title: 'My Orders',
        icon: <ShoppingBag color={COLORS.tertiary} className="w-3 mr-2" />,
        url: '/ordersScreen'
    },
    {
        id: 'qt12359aad',
        title: 'My Profile',
        icon: <UserIcon color={COLORS.tertiary} className="w-3 mr-2" />,
        url: '/profileScreen'
    },
    {
        id: 'qt12359aag',
        title: 'Subscription',
        icon: <Plus color={COLORS.tertiary} className="w-3 mr-2" />,
        url: '/subscriptionScreen'
    },

    {
        id: 'qt12359aam',
        title: 'Help Center',
        icon: <Headphones color={COLORS.tertiary} className="w-3 mr-2" />,
        url: '/helpCenterScreen'
    },
]


const Orders = [
    { "order_id": "#fa725", "customer_name": "Arshad", "customer_id": "561a3f0e-66cb-4f5d-b2e5-a19ef30a31b4", "mobile": "266-774-3618", "status": "delivered", "order_date": "3/12/2023", "payment_method": "payment gateway", "channel": "manual" },
    { "order_id": "#a2855", "customer_name": "Sheffy Keyte", "customer_id": "fdedb94a-1f8c-4acc-8dbf-7ea6b0d7ac5f", "mobile": "228-539-4347", "status": "onway", "order_date": "8/5/2023", "payment_method": "cod", "channel": "manual" },
    { "order_id": "#ee055", "customer_name": "Arshad", "customer_id": "561a3f0e-66cb-4f5d-b2e5-a19ef30a31b4", "mobile": "270-224-8716", "status": "pending", "order_date": "8/9/2023", "payment_method": "payment gateway", "channel": "manual" },
    { "order_id": "#0a133", "customer_name": "Amber Smidmore", "customer_id": "2fb6c473-2b7c-424e-b041-923b0bc8ee33", "mobile": "253-736-0343", "status": "cancelled", "order_date": "5/22/2023", "payment_method": "cod", "channel": "Mobile App" },
    { "order_id": "#95ca0", "customer_name": "Rubie Bault", "customer_id": "7ad6bf12-5470-4743-8788-ffbeccb79551", "mobile": "166-309-1074", "status": "delivered", "order_date": "2/25/2023", "payment_method": "payment gateway", "channel": "Mobile App" },
    { "order_id": "#1095f", "customer_name": "Arshad", "customer_id": "561a3f0e-66cb-4f5d-b2e5-a19ef30a31b4", "mobile": "345-446-0639", "status": "cancelled", "order_date": "1/14/2023", "payment_method": "payment gateway", "channel": "manual" },
    { "order_id": "#b414d", "customer_name": "Karyl Ahern", "customer_id": "d2bd4fa9-0ac3-4cf8-b128-fbc3841d800e", "mobile": "161-736-5163", "status": "delivered", "order_date": "1/16/2023", "payment_method": "payment gateway", "channel": "Mobile App" },
    { "order_id": "#fb883", "customer_name": "Spense Stuchbery", "customer_id": "8acf1e52-68de-4b3b-a350-223ed32eecd2", "mobile": "813-821-7409", "status": "onway", "order_date": "3/11/2023", "payment_method": "cod", "channel": "manual" },
    { "order_id": "#3e41e", "customer_name": "Marjie Bleakley", "customer_id": "6c7b7cbb-c0f5-4909-8eec-542dc9ada94f", "mobile": "708-383-9099", "status": "delivered", "order_date": "6/8/2023", "payment_method": "payment gateway", "channel": "manual" },
    { "order_id": "#9372b", "customer_name": "Arshad", "customer_id": "561a3f0e-66cb-4f5d-b2e5-a19ef30a31b4", "mobile": "953-895-2692", "status": "onhold", "order_date": "8/25/2023", "payment_method": "cod", "channel": "manual" },
    { "order_id": "#83f67", "customer_name": "Arshad", "customer_id": "561a3f0e-66cb-4f5d-b2e5-a19ef30a31b4", "mobile": "303-934-6471", "status": "delivered", "order_date": "6/29/2023", "payment_method": "payment gateway", "channel": "manual" },
    { "order_id": "#a55ab", "customer_name": "Arshad", "customer_id": "561a3f0e-66cb-4f5d-b2e5-a19ef30a31b4", "mobile": "415-668-7833", "status": "cancelled", "order_date": "1/7/2023", "payment_method": "cod", "channel": "manual" },
]

const OrdersStatuses = [
    {
        title: 'onhold',
    },
    {
        title: 'processing',
    },
    {
        title: 'pending',
    },
    {
        title: 'picked',
    },
    {
        title: 'onway',
    },
    {
        title: 'delivered',
    },
    {
        title: 'cancelled',
    },
]

const policies = [
    {
        id: 'pl12359asd',
        title: 'Terms of Service',
        url: '/terms'
    },
    {
        id: 'pl12359afd',
        title: 'Privacy Policy',
        url: '/privacypolicyscreen'
    }
]

const contactDetails = {
    email: 'info@apluslaundry.in',
    phone: '+91 9392127412',
    address: 'D. NO. 1-1211/12, Main Road, Reveune ward No 1, Near Universal Shop, Kurnool road, Chimakurthy, Andhra Pradesh-523226'
}

const privacypolicyContent = `
Privacy Policy

1. Information We Collect

At APlus Laundry, we collect various types of personal information from our users to provide them with our laundry services effectively. This information may include:

Name
Contact information (phone number, email address)
Delivery address
Payment details (credit card information, billing address)
Usage data (such as preferences, frequency of service)
2. How We Use Your Information

We use the collected information for the following purposes:

Processing and fulfilling laundry orders
Communicating with users regarding their orders, account updates, and promotional offers
Improving our services, products, and user experience
Analyzing usage trends and patterns to enhance our marketing and advertising strategies
Preventing fraudulent activities and ensuring the security of user accounts and transactions
3. Data Sharing and Disclosure

We may share users' personal information with third-party service providers, including:

Payment processors to facilitate transactions
Delivery partners for order fulfillment
Marketing and analytics service providers for data analysis and advertising purposes
Legal and regulatory authorities when required by law or to protect our rights and interests
4. Security Measures

We implement industry-standard security measures to safeguard user data against unauthorized access, disclosure, alteration, or destruction. These measures include encryption, access controls, and regular security audits.

5. Cookies and Tracking

Our website or app may use cookies and similar tracking technologies to collect information about users' browsing activities and preferences. Users can manage their cookie preferences through their browser settings.

6. Data Retention

We retain user data only for as long as necessary to fulfill the purposes outlined in this privacy policy or as required by law. Users can request the deletion of their data by contacting us at info@apluslaundry.in.

7. Your Rights and Choices

Users have the right to:

Access and update their personal information
Request the deletion of their data
Opt-out of receiving marketing communications
Object to the processing of their data under certain circumstances
8. Contact Us

If you have any questions or concerns about our privacy practices or this policy, please contact us at info@apluslaundry.in.
`

const termsOfServiceContent = `
Terms and Conditions

Welcome to APlus Laundry! By accessing or using our laundry services, you agree to comply with these terms and conditions:

1. Service Description

APlus Laundry offers laundry pickup, cleaning, and delivery services to individuals and businesses. Our services include washing, drying, folding, and ironing of various types of clothing and household textiles.

2. Ordering and Payment

Users can place orders through our website or app by selecting their desired services, specifying pickup and delivery preferences, and providing payment information.
Payment is processed at the time of order placement using the user's preferred payment method (credit card, debit card, etc.).
Users are responsible for providing accurate and up-to-date billing and contact information to ensure smooth order processing and delivery.
3. Delivery and Returns

We strive to deliver orders within the specified timeframe and to the designated delivery address provided by the user.
Users must ensure someone is available to receive the delivery at the specified time and location.
Returns or exchanges are accepted for damaged or incorrect items, subject to our return policy.
4. User Responsibilities

Users are responsible for providing accurate and complete information when placing orders, including garment specifications, delivery instructions, and contact details.
Users must comply with our usage policies and guidelines, including those related to payment, order modifications, and account security.
5. Intellectual Property

All content, trademarks, logos, and other intellectual property displayed on our website or app are the property of APlus Laundry and may not be used or reproduced without permission.
6. Limitation of Liability

APlus Laundry shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use or inability to use our services, including but not limited to service interruptions, data loss, or errors in service provision.
7. Termination

APlus Laundry reserves the right to terminate or suspend user accounts or access to our services at any time and for any reason, including violation of these terms and conditions or misuse of our services.
8. Governing Law

These terms and conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
9. Contact Us

If you have any questions or concerns about these terms and conditions or our laundry services, please contact us at info@apluslaundry.in.
`

const Backend_Url = 'https://apis.apluslaundry.in/'
// const Backend_Url = 'http://localhost:4040/'

export { User, Address, pincode, LaundryProducts, Services, categories, PickupDates, TimeSlots, AppBanners, YOUR_SHOP_LATITUDE, YOUR_SHOP_LONGITUDE, YOUR_RADIUS_IN_KM, BaseFee, QuickTabs, Orders, Backend_Url, OrdersStatuses, policies, contactDetails, privacypolicyContent, termsOfServiceContent }
