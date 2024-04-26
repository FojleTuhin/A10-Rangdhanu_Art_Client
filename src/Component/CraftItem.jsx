
import Card from "./Card";

const CraftItem = () => {
    return (
        <div className="px-4 md:px-8 lg:px-[100px] pt-10 pb-1">
            <p className="text-2xl font-medium mb-7">Craft item</p>
            <div className="flex gap-6 justify-center flex-wrap">
                <Card></Card>
            </div>

        </div>
    );
};

export default CraftItem;