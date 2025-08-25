

const MainHeader = () => {
    return (
        <>
            <div className="h-[80px] bg-[#C4D9FF] px-2 py-3 shadow-md">
                {/* left side */}
                <div className="flex justify-start gap-4 items-center">
                    <div className="h-[55px] w-[55px] bg-gray-300 rounded-lg">
                    </div>

                    <h2 className="font-semibold">
                        Spending Tracker
                    </h2>
                </div>

                {/* right side */}
                <div className="flex justify-end gap-4">

                </div>
            </div>
        </>
    );
}

export default MainHeader;