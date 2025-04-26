import React from 'react';

const Modal = ({ children, isOpen, onClose, title, hideHeader, showActionBtn, actionBtnIcon = null, actionBtnText, onActionClick }) => {
    if (!isOpen) return null; // Don't render anything if modal is closed

    return (
        <div className='fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black/40'>
            {/* Modal Content */}
            <div className="relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-[450px] max-w-full">
                {/* Modal Header */}
                {!hideHeader && (
                    <div className="flex items-center justify-between p-4 border-b border-gray-100">
                        <h3 className="md:text-lg font-medium text-gray-900">{title}</h3>

                        {showActionBtn && (
                            <button
                                className='btn-smal-light mr-2'
                                onClick={onActionClick}
                            >
                                {actionBtnIcon}
                                {actionBtnText}
                            </button>
                        )}
                    </div>
                )}

                <button 
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 flex justify-center items-center absolute top-3 right-3"
                    onClick={onClose}
                >
                    ✖
                </button>

                {/* Modal Body (Scrollable) */}
                <div className="flex-1 overflow-y-auto p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
