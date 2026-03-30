import AppLogoIcon from '@/components/app-logo-icon';

export default function AppLogo() {
    return (
        <div className="flex items-center">
            {/* Logo */}
            <div className="flex aspect-square size-8 items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground overflow-hidden">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbK7UAScoucgUv0hTe2JFsMXIjgUnFfvzLA&s"
                    alt="Logo"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Text */}
            <div className="ml-2 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">
                    PENCEPUAN SISWA
                </span>
            </div>
        </div>
    );
}