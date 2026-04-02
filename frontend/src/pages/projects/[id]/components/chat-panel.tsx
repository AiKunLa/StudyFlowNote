/**
 * ChatPanel - 对话/聊天面板
 *
 * 功能：
 * - 对话标题 + 操作图标
 * - 中央上传引导区域
 * - 底部聊天输入框
 */

export function ChatPanel() {
  return (
    <div className="flex-1 flex flex-col bg-white border border-gray-200 rounded-2xl  overflow-hidden relative">
      <div className="p-5 flex justify-between items-center border-b border-transparent">
        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
            </path>
          </svg>
          与笔记本对话
        </h2>
        <button className="text-gray-500 hover:text-gray-800 text-sm flex items-center gap-1 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          会话
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center text-center p-6 pb-20">
        <svg className="w-14 h-14 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z">
          </path>
        </svg>
        <p className="text-sm text-gray-500 leading-relaxed">开始使用笔记本进行对话，提出问题以更好地理解内容</p>
      </div>

      <div className="border-t border-gray-100 p-4 bg-white mt-auto">
        <p className="text-[11px] text-gray-400 mb-3 leading-tight">上下文中未包含来源或注释。点击卡片上的图标即可显示来源或注释。</p>
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-gray-400">模型</span>
          <button
            className="text-xs border border-gray-200 rounded-md px-2.5 py-1 flex items-center gap-1 text-gray-600 hover:bg-gray-50 transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
              </path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            默认
          </button>
        </div>
        <div className="relative flex items-center">
          <input type="text" placeholder="向您的来源提问... (按 Ctrl+Enter 发送)"
            className="w-full border border-gray-200 rounded-xl pl-4 pr-12 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-shadow bg-gray-50 hover:bg-white focus:bg-white" />
          <button
            className="absolute right-2 bg-[#93c5fd] hover:bg-blue-500 text-white rounded-lg p-1.5 aspect-square flex items-center justify-center transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
