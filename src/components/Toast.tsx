import {AlertCircle, CheckCircle2, Info, X} from "lucide-react";

type ToastType = "success" | "error" | "info";

interface ToastProps {
    message: string;
    type?: ToastType;
    onClose: () => void;

}

const Toast = ({message, type = 'success', onClose}: ToastProps) => {

    const icons = {
        success: <CheckCircle2 className="text-emerald-500" />,
        error: <AlertCircle className="text-rose-500" />,
        info: <Info className="text-blue-500" />,
    };

    const backgrounds = {
        success: 'bg-emerald-50 border-emerald-100',
        error: 'bg-rose-50 border-rose-100',
        info: 'bg-blue-50 border-blue-100'
    }

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            <div className={`flex items-center p-4 rounded-2xl border-2 shadow-2xl min-w-[320px] ${backgrounds[type]}`}>

                <div className="mr-3">
                    {icons[type]}
                </div>

                <div className="flex-1 mr-4">
                    <p className="text-sm font-bold text-slate-900 leading-tight">
                        {message}
                    </p>
                </div>

                <button onClick={onClose} className="p-1 hover:bg-black/5 rounded-lg transition-colors text-slate-400 hover:text-slate-600">
                    <X size={16} />
                </button>

            </div>
        </div>
    );
};

export default Toast;