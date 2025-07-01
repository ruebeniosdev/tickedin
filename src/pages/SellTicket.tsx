import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const SellTicket = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    price: "",
    description: "",
    date: "",
    location: "",
  });

  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketData = {
      ...formData,
      image,
    };
    console.log("Ticket Listed:", ticketData);
    alert("Ticket listed successfully!");
  };

  return (
    <div className="flex justify-center p-4">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Sell a Ticket</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="eventName">Event Name</Label>
              <Input
                id="eventName"
                name="eventName"
                className="mt-1"
                placeholder="E.g. Stonebwoy Concert"
                value={formData.eventName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                name="date"
                className="mt-1"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                className="mt-1"
                placeholder="E.g. Accra International Conference Centre"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="price">Price (GHS)</Label>
              <Input
                id="price"
                type="number"
                name="price"
                className="mt-1"
                placeholder="E.g. 120"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                className="mt-1"
                placeholder="Any extra ticket details..."
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="image">Ticket Image</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                className="mt-1"
                onChange={handleImageChange}
              />

              {imagePreview && (
                <div className="mt-3 space-y-2">
                  <img
                    src={imagePreview}
                    alt="Ticket Preview"
                    className="h-40 w-full object-cover rounded-lg border"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={handleRemoveImage}
                    className="w-full"
                  >
                    Remove Image
                  </Button>
                </div>
              )}
            </div>

            <Button type="submit" className="w-full">
              List Ticket
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
