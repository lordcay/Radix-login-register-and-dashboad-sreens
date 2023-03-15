export default function getActivityIconName(action) {
    switch (action) {
        case 'Retiree Account':
            return 'phone-portrait-outline';
            break;
        case 'Voluntary Contribution':
            return 'airplane-outline';
            break;
        case 'Micro Pension':
            return 'airplane-outline';
            break;
        case 'bills':
            return 'logo-buffer';
            break;
        default:
            // throw 'action does not exist';
            break;
    }
}
